import create from 'zustand';
import type { CartType, Action } from '../type';

const initialState = {
  totalAmount: 400,
  deliverFee: 0,
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
};

export type State = {
  totalAmount: number,
  deliverFee: number,
  lineItems: CartType[],
};

// reducer 
// TODO 改寫
const reducer = (state: State, action: Action) {
  // switch (action.type) {
  //   case 'ADD_TO_CART': {
  //     const lineItems = action.payload;
  //     const totalAmount = calculateAmount(lineItems, 0);
  //     return {
  //       ...state,
  //       lineItems,
  //       totalAmount,
  //     };
  //   }
  //   case 'Increase-Item': {
  //     const id = action.payload;
  //     const lineItems = state.lineItems.map((item: CartType) => {
  //       if (item.id === id) {
  //         item.quantity++;
  //       }
  //       return item;
  //     });
  //     return {
  //       ...state,
  //       lineItems,
  //       totalAmount: calculateAmount(lineItems, state.deliverFee.fee),
  //     };
  //   }
  //   case 'Decrease-Item': {
  //     const id = action.payload;
  //     const lineItems = state.lineItems.map((item: CartType) => {
  //       if (item.id === id) {
  //         item.quantity--;
  //       }
  //       return item;
  //     });
  //     return {
  //       ...state,
  //       lineItems,
  //       totalAmount: calculateAmount(lineItems, state.deliverFee.fee),
  //     };
  //   }
  //   case 'Delete-Item': {
  //     const id = action.payload;
  //     const lineItems = state.lineItems.filter(
  //       (item: CartType) => item.id !== id,
  //     );
  //     return {
  //       ...state,
  //       lineItems,
  //       totalAmount: calculateAmount(lineItems, state.deliverFee.fee),
  //     };
  //   }
  //   case 'Deliver-Fee': {
  //     const deliverFee = action.payload;
  //     const { fee } = deliverFee;
  //     return {
  //       ...state,
  //       deliverFee,
  //       totalAmount: calculateAmount(state.lineItems, fee),
  //     };
  //   }
  //   default:
  //     return state;
  // }
}

const useCartStore = create <State>
  ((set) => {
    return {
      ...initialState,
    };
  });

export default useCartStore;
