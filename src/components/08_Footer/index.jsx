import { memo } from 'react';
// import './Footer.scss';

const Footer = memo(() => {
  return (
    <section className="footer">
      <div className="wrap">
        <div className="title">
          <h5>ALPHA shop</h5>
        </div>
        <div className="information">
          <h5>客戶服務</h5>
          <a href="#home" className="linkTo">
            運送說明
          </a>
          <a href="#home" className="linkTo">
            退換貨相關
          </a>
          <a href="#home" className="linkTo">
            付款資訊
          </a>
          <a href="#home" className="linkTo">
            FAQ
          </a>
        </div>
        <div className="information">
          <h5>關於我們</h5>
          <a href="#home" className="linkTo">
            品牌故事
          </a>
          <a href="#home" className="linkTo">
            媒體連繫
          </a>
          <a href="#home" className="linkTo">
            Press kit
          </a>
        </div>
        <div className="information">
          <h5>資訊</h5>
          <a href="#home" className="linkTo">
            隱私政策
          </a>
          <a href="#home" className="linkTo">
            Cookie
          </a>
          <a href="#home" className="linkTo">
            GDPR
          </a>
        </div>
        <div className="fellow">
          <h5>追蹤ALPHA shop</h5>
          <p className="telephone">+886 02123-45678</p>
          <div className="socialMidia">
            <i className="fa fa-facebook-f" />
            <i className="fa fa-instagram" />
            <i className="fa fa-whatsapp" />
          </div>
        </div>
      </div>
    </section>
  );
});
export default Footer;
