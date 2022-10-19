import { useCallback, useRef } from 'react';
import shallow from 'zustand/shallow';
import useCartStore from '../store/useCartStore';
import Header from './01_Header';
import Wizard from './02_Wizard';
import Step1 from './03_Step1';
import Step2 from './04_Step2';
import Step3 from './05_Step3';
import ProgressControl from './06_ProgressControl';
import Cart from './07_Cart';
import Footer from './08_Footer';
import { CartContext } from './cartContext';
import type { CartType } from '../type';

const App = () => {
  const { step, onChangeStep } = useCartStore((state) => {
    return {
      step: state.step,
      onChangeStep: state.onChangeStep,
    };
  }, shallow);

  const atChangeStep = useCallback((nextStep: number) => {
    switch (nextStep) {
      case 2: {
        break;
      }
      default: {
        onChangeStep(nextStep);
      }
    }
  }, [onChangeStep]);
  // ------------------------
  // React.useEffect(() => {
  //   fetch('./initialCart.json')
  //     .then((res) => res.json())
  //     .then((data: CartType) => {
  //       dispatch({ type: 'ADD_TO_CART', payload: data });
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  // 蟲洞
  // const provideValue = useMemo(() => {
  //   return {
  //     step,
  //     state,
  //     setStep,
  //     atDeleteItem,
  //     atReduceItem,
  //     atIncreaseItem,
  //     atDeliverFee,
  //   };
  // }, [
  //   step,
  //   state,
  //   setStep,
  //   atDeleteItem,
  //   atReduceItem,
  //   atIncreaseItem,
  //   atDeliverFee,
  // ]);

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
