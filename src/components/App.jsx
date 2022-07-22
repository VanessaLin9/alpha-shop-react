import '../styles.css';
import React from 'react';

import Header from './01_Header';
import Wizard from './02_Wizard';
import Step1 from './03_Step1';
import Step2 from './04_Step2';
import Step3 from './05_Step3';
// import ProgressControl from './06_ProgressControl';
import Cart from './07_Cart';
import Footer from './08_Footer';

//
const App = () => {
  const [step, setStep] = React.useState(0);
  const goPage = (page) => {
    setStep((num) => {
      if (num + page > 2) {
        return 2;
      }
      return num + page;
    });
    console.log('step', step);
  };
  let stepContent;
  let nextStep = '下一步';
  if (step === 0) {
    stepContent = <Step1 />;
  } else if (step === 1) {
    stepContent = <Step2 />;
  } else {
    nextStep = '確認下單';
    stepContent = <Step3 />;
  }

  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <div className="register-container col col-lg-6 col-sm-12">
          <h2 className="register-title align-start">結帳</h2>
          <Wizard step={step} />
          {stepContent}
          {/* <ProgressControl /> */}
          <div className="mimic-btn">
            {step <= 0 ? (
              ''
            ) : (
              <button className="mimic-pre" onClick={() => goPage(-1)}>
                上一步
              </button>
            )}
            <button className="mimic-nex" onClick={() => goPage(1)}>
              {nextStep}
            </button>
          </div>
        </div>
        <div className="cart-container col col-lg-5 col-sm-12">
          <Cart />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
