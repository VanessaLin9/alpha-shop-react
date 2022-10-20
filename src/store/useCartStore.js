import create from 'zustand';
import {
  Action,
  changeStep,
  updateLineItemQuantity,
  removeItem,
  updateShoppingFee,
  updateUserInfo,
} from '../actions/index';
import type { CartType, UserInfo } from '../type';

export type State = {
  totalAmount: number,
  step: number,
  totalPrice: number,
  shippingFee: number,
  lineItems: CartType[],
  userInfo: UserInfo,
  // action
  onChangeStep: (nextStep: number) => void,
  onUpdateLineItemQuantity: (id: string, quantity: number) => void,
  onRemoveItem: (id: string) => void,
  onUpdateShoppingFee: (price: number) => void,
  onUpdateUserInfo: (useInfo: UserInfo) => void,
};

const initialState = {
  totalAmount: 0,
  step: 1,
  totalPrice: 400,
  shippingFee: 0,
  lineItems: [
    {
      id: '1',
      name: '貓咪罐罐',
      img: 'https://picsum.photos/300/300?text=1',
      price: 100,
      quantity: 2,
    },
    {
      id: '2',
      name: '貓咪干干',
      img: 'https://picsum.photos/300/300?text=2',
      price: 200,
      quantity: 1,
    },
  ],
  useInfor: {
    total: '先生',
    name: 'tank',
    phone: '0919888777',
    email: 'tank@gmail.com',
    city: 'TPI',
    address: '',
  },
};

// 計算總價
const calculateAmount = (lineItems: CartType, shippingFee: number) => {
  const calculate = lineItems.reduce((pre, curr) => {
    return pre + curr.price * curr.quantity;
  }, 0);
  return calculate + shippingFee;
};

// TODO reducer
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'Change-Step': {
      return {
        ...state,
        step: action.payload,
      };
    }
    case 'Update-Line-Item-Quantity': {
      const { id, quantity } = action.payload;
      const lineItems = state.lineItems.map((item: CartType) => {
        if (item.id === id) {
          return { ...item, quantity };
        }
        return item;
      });
      return {
        ...state,
        lineItems,
        totalPrice: calculateAmount(lineItems, state.shippingFee),
      };
    }
    case 'Delete-Item': {
      const id = action.payload;
      const lineItems = state.lineItems.filter(
        (item: CartType) => item.id !== id,
      );
      return {
        ...state,
        lineItems,
        totalPrice: calculateAmount(lineItems, state.shippingFee),
      };
    }
    case 'Deliver-Fee': {
      const shippingFee = action.payload;
      return {
        ...state,
        shippingFee,
        totalPrice: calculateAmount(state.lineItems, shippingFee),
      };
    }
    default:
      return state;
  }
};

const useCartStore = create((set) => {
  const dispatch = (action: Action) => {
    set((state) => {
      return reducer(state, action);
    });
  };
  return {
    ...initialState,
    dispatch,
    onChangeStep(nextStep: number) {
      dispatch(changeStep(nextStep));
    },
    onUpdateLineItemQuantity(id: string, quantity: number) {
      dispatch(updateLineItemQuantity(id, quantity));
    },
    onRemoveItem(id: string) {
      dispatch(removeItem(id));
    },
    onUpdateShoppingFee(price: number) {
      dispatch(updateShoppingFee(price));
    },
    onUpdateUserInfo(useInfo: UserInfo) {
      dispatch(updateUserInfo(useInfo));
    },
  };
});

export default useCartStore;
