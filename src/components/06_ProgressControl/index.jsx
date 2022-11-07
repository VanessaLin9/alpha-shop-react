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
        <div>下一步</div>
        <div className="arrow-line" />
      </button>
    </section>
  );

  const secondBtn = (
    <section className="button-group" data-phase="shipping">
      <button className="prev" onClick={() => onChangeStep(1)}>
        <div className="arrow-line" />
        <div>上一步</div>
      </button>
      <button className="next" onClick={() => onChangeStep(3)}>
        <div>下一步</div>
        <div className="arrow-line" />
      </button>
    </section>
  );
  const thirdBtn = (
    <section className="button-group" data-phase="credit-card">
      <button className="prev" onClick={() => onChangeStep(2)}>
        <div className="arrow-line" />
        <div>上一步</div>
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
