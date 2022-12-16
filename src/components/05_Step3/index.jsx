/* eslint-disable react/jsx-props-no-spreading */
import { memo } from 'react';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';

const Step3 = memo(() => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // 改由 react hooks form 接手
  // const [state, setState] = useState({
  //   cardName: '',
  //   cardNumber: '',
  //   validDay: '',
  //   cvcCode: '',
  // });

  // function atChange(e) {
  //   const { name, value } = e.target;
  //   setState((pre) => {
  //     return {
  //       ...pre,
  //       [name]: value,
  //     };
  //   });
  // }

  const atSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="step2-form-container" data-name="Step3">
      <form data-phase="credit-card" onSubmit={handleSubmit(atSubmit)}>
        <h3 className="form-title">付款資訊</h3>

        <section className="form-body">
          <div className="form-row single-input">
            <div className="group">
              <div className="input-label">持卡人姓名</div>
              <input
                className="form-control"
                type="text"
                placeholder="John Doe"
                {...register('cardName', { required: true, maxLength: 24 })}
              />
              {errors.cardName && <span>This field is required</span>}
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
                {...register('cardNumber', { required: true, maxLength: 16 })}
              />
              {errors.cardNumber && <span>This field is required</span>}
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
                {...register('validDay', { required: true })}
              />
              {errors.validDay && <span>This field is required</span>}
            </div>

            <div className="group">
              <div className="input-label">CVC / CCV</div>
              <InputMask
                className="form-control"
                type="text"
                placeholder="123"
                mask="999"
                {...register('cvcCode', { required: true })}
              />
              {errors.cvcCode && <span>This field is required</span>}
            </div>
          </div>
        </section>
      </form>
    </section>
  );
});
export default Step3;
