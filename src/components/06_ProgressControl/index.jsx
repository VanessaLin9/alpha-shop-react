import React from 'react';
import './ProgressControl.css';

const ProgressControl = () => {
  return (
    <section data-name="ProgressControl">
      <section className="progress-control-container">
        <section className="button-group first" data-phase="address">
          <button className="next">
            下一步
            <span className="arrow-line" />
            <span className="arrow-head">{'>'}</span>
          </button>
        </section>

        <section className="button-group" data-phase="shipping">
          <button className="prev">
            <span className="arrow-head">{'<'}</span>
            <span className="arrow-line prev-arrow" />
            上一步
          </button>
          <button className="next">
            下一步
            <span className="arrow-line" />
            <span className="arrow-head">{'>'}</span>
          </button>
        </section>

        <section className="button-group" data-phase="credit-card">
          <button className="prev">
            <span className="arrow-head">{'<'}</span>
            <span className="arrow-line prev-arrow" />
            上一步
          </button>
          <button className="next">確認下單</button>
        </section>
      </section>
    </section>
  );
};
export default ProgressControl;
