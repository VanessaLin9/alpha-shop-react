import React from "react";
import "./Step3.css";

const Step3 = () => {
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
              />
            </div>
          </div>

          <div className="form-row single-input">
            <div className="group">
              <div className="input-label">卡號</div>
              <input
                className="form-control"
                type="text"
                placeholder="1111 2222 3333 4444"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="group">
              <div className="input-label">有效期限</div>
              <input className="form-control" type="text" placeholder="MM/YY" />
            </div>
            <div className="group">
              <div className="input-label">CVC / CCV</div>
              <input className="form-control" type="text" placeholder="123" />
            </div>
          </div>
        </section>
      </form>
    </section>
  );
};
export default Step3;
