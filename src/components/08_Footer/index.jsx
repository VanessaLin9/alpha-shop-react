import { memo } from 'react';
import './Footer.css';

const Footer = memo(() => {
  return (
    <section className="footer">
      <div className="wrap">
        <div className="title">
          <h5>ALPHA shop</h5>
        </div>
        <div className="information">
          <h5>客戶服務</h5>
          <a href="/" className="btn">
            運送說明
          </a>
          <a href="/" className="btn">
            退換貨相關
          </a>
          <a href="/" className="btn">
            付款資訊
          </a>
          <a href="/" className="btn">
            FAQ
          </a>
        </div>
        <div className="information">
          <h5>關於我們</h5>
          <a href="/" className="btn">
            品牌故事
          </a>
          <a href="/" className="btn">
            媒體連繫
          </a>
          <a href="/" className="btn">
            Press kit
          </a>
        </div>
        <div className="information">
          <h5>資訊</h5>
          <a href="/" className="btn">
            隱私政策
          </a>
          <a href="/" className="btn">
            Cookie
          </a>
          <a href="/" className="btn">
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
