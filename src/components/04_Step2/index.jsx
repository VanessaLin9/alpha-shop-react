import { memo, useState } from 'react';
import shallow from 'zustand/shallow';
import useCartStore from '../../store/useCartStore';

const Step2 = memo(() => {
  const { onUpdateShoppingFee } = useCartStore((state) => {
    return {
      onUpdateShoppingFee: state.onUpdateShoppingFee,
    };
  }, shallow);
  const [deliver, setDeliver] = useState('0');
  const atRadioChange = (e) => {
    const Fee = Number(e.target.value);
    setDeliver(e.target.value);
    onUpdateShoppingFee(Fee);
  };
  return (
    <section className="step2-form-container" data-name="Step2">
      <form data-phase="shipping">
        <h3 className="form-title">運送方式</h3>
        <section className="form-body">
          <label className="radio-group" data-price="0">
            <input
              className="form-check-input"
              id="shipping-standard"
              type="radio"
              name="shipping"
              value="0"
              onChange={atRadioChange}
              checked={deliver === '0'}
            />
            <div className="radio-info">
              <div className="sending-type">
                <div className="sent-text">標準運送</div>
                <div className="postage">免費</div>
              </div>
              <div className="period">約 3~7 個工作天</div>
            </div>
            <div className="radio-box-border" />
          </label>

          <label className="radio-group " data-price="500">
            <input
              className="form-check-input"
              id="shipping-dhl"
              type="radio"
              name="shipping"
              value="500"
              onChange={atRadioChange}
              checked={deliver === '500'}
            />
            <div className="radio-info">
              <div className="sending-type">
                <div className="sent-text">DHL 貨運</div>
                <div className="postage">500$</div>
              </div>
              <div className="period ">48 小時內送達</div>
            </div>
            <div className="radio-box-border" />
          </label>
        </section>
      </form>
    </section>
  );
});
export default Step2;
