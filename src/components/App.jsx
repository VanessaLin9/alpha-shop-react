import React, { useMemo } from 'react';
import Header from './01_Header';
import Wizard from './02_Wizard';
import Step1 from './03_Step1';
import Step2 from './04_Step2';
import Step3 from './05_Step3';
import ProgressControl from './06_ProgressControl';
import Cart from './07_Cart';
import Footer from './08_Footer';
import { CartContext } from './cartContext';
import type { CartType, Action } from '../type';

// 計算總價
const calculateAmount = (lineItems: CartType, deliverFee: number) => {
  const calculate = lineItems.reduce((pre, curr) => {
    return pre + curr.price * curr.quantity;
  }, 0);
  return calculate + deliverFee;
};

// TODO Reducer
function reducer(state, action: Action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const lineItems = action.payload;
      const totalAmount = calculateAmount(lineItems, 0);
      return {
        ...state,
        lineItems,
        totalAmount,
      };
    }
    case 'Increase-Item': {
      const id = action.payload;
      const lineItems = state.lineItems.map((item: CartType) => {
        if (item.id === id) {
          item.quantity += 1;
        }
        return item;
      });
      return {
        ...state,
        lineItems,
        totalAmount: calculateAmount(lineItems, state.deliverFee.fee),
      };
    }
    case 'Decrease-Item': {
      const id = action.payload;
      const lineItems = state.lineItems.map((item: CartType) => {
        if (item.id === id) {
          item.quantity -= 1;
        }
        return item;
      });
      return {
        ...state,
        lineItems,
        totalAmount: calculateAmount(lineItems, state.deliverFee.fee),
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
        totalAmount: calculateAmount(lineItems, state.deliverFee.fee),
      };
    }
    case 'Deliver-Fee': {
      const deliverFee = action.payload;
      const { fee } = deliverFee;
      return {
        ...state,
        deliverFee,
        totalAmount: calculateAmount(state.lineItems, fee),
      };
    }
    default:
      return state;
  }
}

//
const App = () => {
  const [step, setStep] = React.useState(0);
  const initialState = {
    lineItems: [],
    totalAmount: 0,
    deliverFee: { id: 'shipping-standard', fee: 0 },
  };

  const [state, dispatch] = React.useReducer(reducer, initialState);
  
  // ------------------------
  React.useEffect(() => {
    fetch('./initialCart.json')
      .then((res) => res.json())
      .then((data: CartType) => {
        dispatch({ type: 'ADD_TO_CART', payload: data });
      })
      .catch((error) => console.log(error));
  }, []);

  // Cart 相關相關邏輯

  // 刪除品項
  const atDeleteItem = React.useCallback(
    (id: string) => {
      dispatch({ type: 'Delete-Item', payload: id });
    },
    [dispatch],
  );
  // 減少品項
  const atReduceItem = React.useCallback(
    (id: string) => {
      dispatch({ type: 'Decrease-Item', payload: id });
    },
    [dispatch],
  );
  // 增加品項
  const atIncreaseItem = React.useCallback(
    (id: string) => {
      dispatch({ type: 'Increase-Item', payload: id });
    },
    [dispatch],
  );

  // Deliver Fee
  const atDeliverFee = React.useCallback(
    (deliverFee) => {
      dispatch({ type: 'Deliver-Fee', payload: deliverFee });
    },
    [dispatch],
  );

  // 蟲洞
  const provideValue = useMemo(() => {
    return {
      step,
      state,
      setStep,
      atDeleteItem,
      atReduceItem,
      atIncreaseItem,
      atDeliverFee,
    };
  }, [
    step,
    state,
    setStep,
    atDeleteItem,
    atReduceItem,
    atIncreaseItem,
    atDeliverFee,
  ]);

  let stepContent;

  if (step === 0) {
    stepContent = <Step1 />;
  } else if (step === 1) {
    stepContent = <Step2 />;
  } else {
    stepContent = <Step3 />;
  }

  return (
    <CartContext.Provider value={provideValue}>
      <div className="App">
        <Header />
        <div className="main-container">
          <div className="register-container col col-lg-6 col-sm-12">
            <h2 className="register-title align-start">結帳</h2>
            <Wizard step={step} />
            {stepContent}
            <ProgressControl />
          </div>
          <Cart />
        </div>
        <Footer />
      </div>
    </CartContext.Provider>
  );
};

export default App;
