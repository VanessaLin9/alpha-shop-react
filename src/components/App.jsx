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
import { CartContext } from './cartContext';
import type { CartType } from '../type';


//
const App = () => {
  const [step, setStep] = React.useState(0);
  const [lineItems, setLineItems] = React.useState([]);
  const [totalAmount, setTotalAmount] = React.useState(0);

  React.useEffect(() => {
    fetch('./initialCart.json')
      .then((res) => res.json())
      .then((data: CartType) => {
        setLineItems(data);
      })
      .catch((error) => console.log(error));
  }, []);

  // Cart 相關相關邏輯
  // TODO 計算總價
  React.useEffect(() => {
    const calculate = lineItems.reduce((pre, curr) => {
      return pre + curr.price * curr.quantity;
    }, 0);
    setTotalAmount(calculate);
  }, [lineItems]);
  // TODO 刪除品項
  const atDeleteItem = React.useCallback(
    (id: string) => {
      const newCart = lineItems.filter((item: CartType) => item.id !== id);
      setLineItems(newCart);
    },
    [lineItems],
  );
  // TODO 減少品項
  const atReduceItem = React.useCallback(
    (id: string) => {
      const newCart = lineItems.map((item: CartType) => {
        if (item.id === id) {
          item.quantity--;
        }
        return item;
      });
      setLineItems(newCart);
    },
    [lineItems],
  );
  // TODO 增加品項
  const atIncreaseItem = React.useCallback(
    (id: string) => {
      const newCart = lineItems.map((item: CartType) => {
        if (item.id === id) {
          item.quantity++;
        }
        return item;
      });
      setLineItems(newCart);
    },
    [lineItems],
  );
  // TODO 蟲洞
  const provideValue = {
    step,
    lineItems,
    totalAmount,
    atDeleteItem,
    atReduceItem,
    atIncreaseItem,
  };

  // step control
  const goPage = React.useCallback(
    (page) => {
      setStep((num) => {
        if (num + page > 2) {
          return 2;
        }
        return num + page;
      });
    },
    [step],
  );

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
    <CartContext.Provider value={provideValue}>
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
          <Cart />
        </div>
        <Footer />
      </div>
    </CartContext.Provider>
  );
};

export default App;
