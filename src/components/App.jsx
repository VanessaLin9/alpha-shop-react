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

const App = () => {
  const { step, onChangeStep } = useCartStore((state) => {
    return {
      step: state.step,
      onChangeStep: state.onChangeStep,
    };
  }, shallow);

  // TODO 表單驗證
  const atChangeStep = useCallback(
    (nextStep: number) => {
      // console.log('app handle', nextStep);
      switch (nextStep) {
        case 2: {
          // console.log('case2', nextStep)
          onChangeStep(nextStep);
          break;
        }
        case 4: {
          // console.log('case4', nextStep)
          onChangeStep(nextStep);
          break;
        }
        default: {
          console.log('app', nextStep);
          onChangeStep(nextStep);
        }
      }
    },
    [onChangeStep],
  );

  // TODO 控制不拔掉會整個壞掉
  let stepContent;

  if (step === 1) {
    stepContent = <Step1 />;
  } else if (step === 2) {
    stepContent = <Step2 />;
  } else {
    stepContent = <Step3 />;
  }
 
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <div className="register-container col col-lg-6 col-sm-12">
          <h2 className="register-title align-start">結帳</h2>
          <Wizard step={step} />
          <div>{stepContent}</div>
          <ProgressControl step={step} onChangeStep={atChangeStep} />
        </div>
        <Cart />
      </div>
      <Footer />
    </div>
  );
};

export default App;
