import { memo, useState } from 'react';
import InputMask from 'react-input-mask';

const Step3 = memo(() => {
  const [state, setState] = useState({
    cardName: '',
    cardNumber: '',
    validDay: '',
    cvcCode: '',
  });

  function atChange(e) {
    const { name, value } = e.target;
    setState((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  }

  return (
    <section className="step2-form-container" data-name="Step3">
      <form data-phase="credit-card">
        <h3 className="form-title">付款資訊</h3>

        <section className="form-body">
          <div className="form-row single-input">
            <div className="group">
              <div className="input-label">持卡人姓名</div>
              <input
                className="form-control"
                type="text"
                placeholder="John Doe"
                name="cardName"
                value={state.cardName}
                onChange={atChange}
              />
            </div>
          </div>

          <div className="form-row single-input">
            <div className="group">
              <div className="input-label">卡號</div>
              <InputMask
                className="form-control"
                type="text"
                placeholder="1111 2222 3333 4444"
                mask="9999 9999 9999 9999"
                name="cardNumber"
                value={state.cardNumber}
                onChange={(e) => atChange(e)}
              />
            </div>
          </div>

          <div className="form-row group-input">
            <div className="group">
              <div className="input-label">有效期限</div>
              <InputMask
                className="form-control"
                type="text"
                placeholder="MM/YY"
                mask="99/99"
                name="validDay"
                value={state.validDay}
                onChange={(e) => atChange(e)}
              />
            </div>

            <div className="group">
              <div className="input-label">CVC / CCV</div>
              <InputMask
                className="form-control"
                type="text"
                placeholder="123"
                mask="999"
                name="cvcCode"
                value={state.cvcCode}
                onChange={(e) => atChange(e)}
              />
            </div>
          </div>
        </section>
      </form>
    </section>
  );
});
export default Step3;
