import React from 'react';

type ProgressControlProps = {
  step: number,
  onChangeStep: (step: number) => void,
};

const ProgressControl: React.FC<ProgressControlProps> = React.memo((props) => {
  const { step, onChangeStep } = props;
  let BtnGroup;

  const firstBtn = (
    <section className="button-group first" data-phase="address">
      <button className="next" onClick={() => onChangeStep(2)}>
        下一步
        <span className="arrow-line" />
        <span className="arrow-head">{'>'}</span>
      </button>
    </section>
  );

  const secondBtn = (
    <section className="button-group" data-phase="shipping">
      <button className="prev" onClick={() => onChangeStep(1)}>
        <span className="arrow-head">{'<'}</span>
        <span className="arrow-line prev-arrow" />
        上一步
      </button>
      <button className="next" onClick={() => onChangeStep(3)}>
        下一步
        <span className="arrow-line" />
        <span className="arrow-head">{'>'}</span>
      </button>
    </section>
  );
  const thirdBtn = (
    <section className="button-group" data-phase="credit-card">
      <button className="prev" onClick={() => onChangeStep(2)}>
        <span className="arrow-head">{'<'}</span>
        <span className="arrow-line prev-arrow" />
        上一步
      </button>
      <button className="next" onClick={() => onChangeStep(4)}>
        確認下單
      </button>
    </section>
  );

  if (step === 1) {
    BtnGroup = firstBtn;
  } else if (step === 2) {
    BtnGroup = secondBtn;
  } else {
    BtnGroup = thirdBtn;
  }
  return <section data-name="ProgressControl">{BtnGroup}</section>;
});
export default ProgressControl;
