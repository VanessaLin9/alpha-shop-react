import "../styles.css";
import React from "react";

import Header from "./01_Header";
import StepProgress from "./02_StepProgress";
import Step1 from "./03_Step1";
import Step2 from "./04_Step2";
import Step3 from "./05_Step3";
import ProgressControl from "./06_ProgressControl";
import Cart from "./07_Cart";
import Footer from "./08_Footer";

//
export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <div className="registe-container col col-lg-6 col-sm-12">
          <h2 class="register-title align-start">結帳</h2>
          <StepProgress />
          <Step1 />
          <Step2 />
          <Step3 />
          <ProgressControl />
        </div>
        <div className="cart-container col col-lg-5 col-sm-12">
          <Cart />
        </div>
      </div>
      <Footer />
    </div>
  );
}