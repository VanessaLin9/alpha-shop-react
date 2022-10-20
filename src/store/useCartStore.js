import create from 'zustand';
import {
  changeStep,
  updateLineItemQuantity,
  removeItem,
  updateShoppingFee,
  updateUserInfo,
} from '../actions/index';
import type { CartType, Action, UserInfo } from '../type';

export type State = {
  totalAmount: number,
  step: number,
  totalPrice: number,
  shippingFee: number,
  lineItems: CartType[],
  userInfo: UserInfo,
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
const calculateAmount = (lineItems: CartType, deliverFee: number) => {
  const calculate = lineItems.reduce((pre, curr) => {
    return pre + curr.price * curr.quantity;
  }, 0);
  return calculate + deliverFee;
};

// TODO reducer
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'CHANGE_STEP': {
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
        totalAmount: calculateAmount(lineItems, state.shippingFee),
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
        totalAmount: calculateAmount(lineItems, state.shippingFee),
      };
    }
    case 'Deliver-Fee': {
      const shippingFee = action.payload;
      return {
        ...state,
        shippingFee,
        totalAmount: calculateAmount(state.lineItems, shippingFee),
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
      console.log('onChangeStep', nextStep)
      dispatch(changeStep(nextStep));
    },
    onUpdateLineItemQuantity(id, quantity) {
      dispatch(updateLineItemQuantity(id, quantity));
    },
    onRemoveItem(id) {
      dispatch(removeItem(id));
    },
    onUpdateShoppingFee(price) {
      dispatch(updateShoppingFee(price));
    },
    onUpdateUserInfo(useInfo) {
      dispatch(updateUserInfo(useInfo));
    },
  };
});

export default useCartStore;
