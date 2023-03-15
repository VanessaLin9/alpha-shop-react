import React from 'react';

type ProgressControlProps = {
  step: number,
  onChangeStep: (step: number) => void,
};

const ProgressControl: React.FC<ProgressControlProps> = (props) => {
  const { step, onChangeStep } = props;

  return (
    <section data-name="ProgressControl">
      <section className="button-group" data-phase="shipping">
        <button
          className="prev"
          disable={step === 1}
          onClick={() => onChangeStep(step - 1)}
        >
          {/* <div className="arrow-line" /> */}
          上一步
        </button>
        <button className="next" onClick={() => onChangeStep(step + 1)}>
          {step === 3 ? 'checkout' : '下一步'}
          {/* <div className="arrow-line" /> */}
        </button>
      </section>
    </section>
  );
};
export default React.memo(ProgressControl);
