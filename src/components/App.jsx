import '../styles.css';
import React from 'react';
import Header from './01_Header';
import Wizard from './02_Wizard';
import Step1 from './03_Step1';
import Step2 from './04_Step2';
import Step3 from './05_Step3';
// import ProgressControl from './06_ProgressControl';
import CartList from './07_CartList';
import CartSum from './07_CartSum';
import Footer from './08_Footer';

type CartType = {
  id: string,
  name: string,
  img: string,
  price: number,
  quantity: number,
};
const HeaderMemo = React.memo(Header);
const WizardMemo = React.memo(Wizard);
const Step1Memo = React.memo(Step1);
const Step2Memo = React.memo(Step2);
const Step3Memo = React.memo(Step3);
const CartListMemo = React.memo(CartList);
const CartSumMemo = React.memo(CartSum);
const FooterMemo = React.memo(Footer);
//
const App = () => {
  const [step, setStep] = React.useState(0);
  const [cart, setCart] = React.useState([]);
  const [sum, setSum] = React.useState(0);

  React.useEffect(() => {
    fetch('./initialCart.json')
      .then((res) => res.json())
      .then((data: CartType) => {
        setCart(data);
      })
      .then(() => {
        const calculate = cart.reduce((pre, curr) => {
          return pre.price * pre.quantity + curr.price * curr.quantity;
        });

        setSum(calculate);
      })
      .catch((error) => console.log(error));
  }, []);

  // Cart 相關相關邏輯
  const atDeleteItem = React.useCallback(
    (id: string) => {
      const newCart = cart.filter((item: CartType) => item.id !== id);
      setCart(newCart);
    },
    [cart],
  );
  const atReduceItem = React.useCallback(
    (id: string) => {
      const newCart = cart.map((item: CartType) => {
        if (item.id === id) {
          if (item.quantity <= 1) {
            alert('確定要刪除嗎?');
            item.quantity = 0;
          } else {
            item.quantity--;
          }
        }
        return item;
      });
      setCart(newCart);
    },
    [cart],
  );
  const atIncreaseItem = React.useCallback(
    (id: string) => {
      const newCart = cart.map((item: CartType) => {
        if (item.id === id) {
          item.quantity++;
        }
        return item;
      });
      setCart(newCart);
    },
    [cart],
  );

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
    stepContent = <Step1Memo />;
  } else if (step === 1) {
    stepContent = <Step2Memo />;
  } else {
    nextStep = '確認下單';
    stepContent = <Step3Memo />;
  }

  return (
    <div className="App">
      <HeaderMemo />
      <div className="main-container">
        <div className="register-container col col-lg-6 col-sm-12">
          <h2 className="register-title align-start">結帳</h2>
          <WizardMemo step={step} />
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
          <section className="cart m-3" data-name="Cart">
            <h3 className="cart-title align-start">購物籃</h3>
            {cart.map((item) => {
              return (
                <CartListMemo
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  img={item.img}
                  price={item.price}
                  quantity={item.quantity}
                  onDeleteItem={atDeleteItem}
                  onReduceItem={atReduceItem}
                  onIncreaseItem={atIncreaseItem}
                />
              );
            })}
            <CartSumMemo sum={sum}/>
          </section>
        </div>
      </div>
      <FooterMemo />
    </div>
  );
};

export default App;
