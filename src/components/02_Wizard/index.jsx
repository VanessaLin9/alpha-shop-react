import { memo } from 'react';
import { useCartContext } from '../cartContext';
import type { step } from '../../type';
import './Wizard.css';

const Wizard = memo(() => {
  const { step } = useCartContext();

  return (
    <section className="step-container col col-12" data-name="Wizard">
      {/* step1 */}
      <span className="step-group" data-phase="address">
        <span className="step-icon" data-order={step >= 1}>
          {step >= 1 ? (
            <span className="text">✔</span>
          ) : (
            <span className="text">1</span>
          )}
        </span>
        <span className="step-label" data-order={step >= 0}>
          寄送地址
        </span>
      </span>
      {/* step2 */}
      <span className="step-bar" data-order={step >= 1} />

      <span className="step-group" data-phase="shipping">
        <span className="step-icon" data-order={step >= 2}>
          {step >= 2 ? (
            <span className="text">✔</span>
          ) : (
            <span className="text">2</span>
          )}
        </span>
        <span className="step-label" data-order={step >= 1}>
          運送方式
        </span>
      </span>
      {/* step3 */}
      <span className="step-bar" data-order={step >= 2} />

      <span className="step-group" data-phase="credit-card">
        <span className="step-icon">
          <span className="text">3</span>
        </span>
        <span className="step-label" data-order={step >= 2}>
          付款資訊
        </span>
      </span>
    </section>
  );
});
export default Wizard;
