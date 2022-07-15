import React from "react";
import "./StepProgress.css";

const StepProgress = () => {
  return (
    <section class="progress-container col col-12" data-name="StepProgress">
      <span class="progress-group" data-phase="address">
        <span class="progress-icon">
          <span class="text">1</span>
        </span>
        <span class="progress-label">寄送地址</span>
      </span>

      <span class="progress-bar" data-order="1"></span>

      <span class="progress-group" data-phase="shipping">
        <span class="progress-icon">
          <span class="text">2</span>
        </span>
        <span class="progress-label">運送方式</span>
      </span>

      <span class="progress-bar" data-order="2"></span>

      <span class="progress-group" data-phase="credit-card">
        <span class="progress-icon">
          <span class="text">3</span>
        </span>
        <span class="progress-label">付款資訊</span>
      </span>
    </section>
  );
};
export default StepProgress;
