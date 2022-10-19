import { memo, useState } from 'react';
import InputMask from 'react-input-mask';
import './step3.scss';

const Step3 = memo(() => {
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [validDay, setValidDay] = useState('');
  const [cvcCode, setCvcCode] = useState('');

  return (
    <section className="pay" data-name="Step3">
      <form className="col col-12" data-phase="credit-card">
        <h3 className="form-title">付款資訊</h3>

        <section className="form-body">
          <div className="form-row single-input">
            <div className="group">
              <div className="input-label">持卡人姓名</div>
              <input
                className="form-control"
                type="text"
                placeholder="John Doe"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
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
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="group">
              <div className="input-label">有效期限</div>
              <InputMask
                className="form-control"
                type="text"
                placeholder="MM/YY"
                mask="99/99"
                value={validDay}
                onChange={(e) => setValidDay(e.target.value)}
              />
            </div>
            <div className="group">
              <div className="input-label">CVC / CCV</div>
              <input
                className="form-control"
                type="text"
                placeholder="123"
                maxLength={3}
                value={cvcCode}
                onChange={(e) => setCvcCode(e.target.value)}
              />
            </div>
          </div>
        </section>
      </form>
    </section>
  );
});
export default Step3;
