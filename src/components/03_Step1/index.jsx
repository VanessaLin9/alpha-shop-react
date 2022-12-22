/* eslint-disable react/jsx-props-no-spreading */
import { memo } from 'react';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { emailValidate, phoneValidate } from '../../utilize/validate';

// 改由 react hook form 接手
const Step1 = memo(() => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const [state, setState] = useState({
  //   title: 'mr',
  //   name: '',
  //   tel: '',
  //   mail: '',
  //   city: '',
  //   address: '',
  // });

  // function atChange(e) {
  //   const { value, name } = e.target;

  const atSubmit = (data) => {
    console.log(data);
  };

  // 表單驗證改由 react hook form 接手
  // switch (name) {
  //   case 'mail': {
  //     emailValidate.test()
  //     break;
  //   }
  //   case 'tel': {
  //     phoneValidate.test()
  //     break;
  //   }
  //   default: {
  //     break;
  //   }
  // };

  //   setState((pre) => {
  //     return {
  //       ...pre,
  //       [name]: value,
  //     };
  //   });
  // }

  return (
    <section className="step1-form-container" data-name="Step1">
      <form data-phase="address" onSubmit={handleSubmit(atSubmit)}>
        <h3 className="form-title">寄送地址</h3>
        <section className="form-body ">
          {/* len 1 */}
          <div className="form-row">
            <div className="group input-title">
              <div className="input-label">稱謂</div>
              <div className="select-container">
                <select className="form-select" {...register('title')}>
                  <option value="mr">先生</option>
                  <option value="ms">女士</option>
                  <option value="mx">不明</option>
                </select>
              </div>
            </div>

            <div className="group input-name">
              <div className="input-label">姓名</div>
              <input
                className="form-control"
                type="text"
                placeholder="請輸入姓名"
                {...register('name', { required: true })}
              />
              {errors.name && <span> This field is required </span>}
            </div>
          </div>
          {/* len 2 */}
          <div className="form-row">
            <div className="group input-tel">
              <div className="input-label">電話</div>
              <InputMask
                className="form-control"
                type="tel"
                placeholder="請輸入行動電話"
                mask="0\999-999999"
                {...register('tel', { required: true, pattern: phoneValidate })}
              />
              {errors.tel && <span> This field is required </span>}
            </div>
            <div className="group input-mail">
              <div className="input-label">Email</div>
              <input
                className="form-control"
                type="email"
                placeholder="請輸入電子郵件"
                {...register('mail', {
                  required: true,
                  pattern: emailValidate,
                })}
              />
              {errors.mail && <span> This field is required </span>}
            </div>
          </div>
          {/* len 3 */}
          <div className="form-row">
            <div className="group input-city">
              <div className="input-label">縣市</div>
              <div className="select-container">
                <select className="form-select" {...register('city')}>
                  <option value="" disabled>
                    請選擇縣市
                  </option>
                  <option value="KLU">基隆市</option>
                  <option value="TPH">新北市</option>
                  <option value="TPE">臺北市</option>
                  <option value="TYC">桃園市</option>
                  <option value="HSH">新竹縣</option>
                  <option value="HSC">新竹市</option>
                  <option value="MAC">苗栗市</option>
                  <option value="MAL">苗栗縣</option>
                  <option value="TXG">臺中市</option>
                  <option value="CWH">彰化縣</option>
                  <option value="CWS">彰化市</option>
                  <option value="NTC">南投市</option>
                  <option value="NTO">南投縣</option>
                  <option value="YLH">雲林縣</option>
                  <option value="CHY">嘉義縣</option>
                  <option value="CYI">嘉義市</option>
                  <option value="TNN">臺南市</option>
                  <option value="KHH">高雄市</option>
                  <option value="IUH">屏東縣</option>
                  <option value="PTS">屏東市</option>
                  <option value="ILN">宜蘭縣</option>
                  <option value="ILC">宜蘭市</option>
                  <option value="HWA">花蓮縣</option>
                  <option value="HWC">花蓮市</option>
                  <option value="TTC">臺東市</option>
                  <option value="TTT">臺東縣</option>
                  <option value="PEH">澎湖縣</option>
                  <option value="KMN">金門縣</option>
                  <option value="LNN">連江縣</option>
                </select>
              </div>
            </div>
            <div className="group input-address">
              <div className="input-label">地址</div>
              <input
                className="form-control"
                type="text"
                placeholder="請輸入地址"
                {...register('address', { required: true })}
              />
              {errors.address && <span> This field is required </span>}
            </div>
          </div>
        </section>
      </form>
    </section>
  );
});
export default Step1;
