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
import type { CartType } from '../type';

const App = () => {
  const { step, onChangeStep } = useCartStore((state) => {
    return {
      step: state.step,
      onChangeStep: state.onChangeStep,
    };
  }, shallow);

  const atChangeStep = useCallback(
    (nextStep: number) => {
      switch (nextStep) {
        case 2: {
          break;
        }
        default: {
          onChangeStep(nextStep);
        }
      }
    },
    [onChangeStep],
  );

  let stepContent;

  if (step === 0) {
    stepContent = <Step1 />;
  } else if (step === 1) {
    stepContent = <Step2 />;
  } else if (step === 3) {
    stepContent = <Step3 />;
  }

  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <div className="register-container col col-lg-6 col-sm-12">
          <h2 className="register-title align-start">結帳</h2>
          <Wizard step={step} />
          <Step3 />
          <ProgressControl step={step} onChangeStep={atChangeStep} />
        </div>
        <Cart />
      </div>
      <Footer />
    </div>
  );
};

export default App;
