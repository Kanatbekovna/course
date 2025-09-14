import scss from "./Footer.module.scss";
const Footer = () => {
  return (
    <footer className={scss.Footer}>
      <div className="container">
        <div className={scss.footer}>
          <div className={scss.logo}>
            <h3>Logo</h3>
            <p>
              (Название)— это частная виртуальная сеть <br /> с уникальными
              функциями и высоким <br /> уровнем безопасности.
              <span className={scss.rounds}>
                <span className={scss.round}></span>
                <span className={scss.round}></span>
                <span className={scss.round}></span>
              </span>
            </p>
            <h5>
              ©2020Lasles<span>VPN</span>
            </h5>
          </div>
          <div className={scss.product}>
            <h4>Продукт</h4>
            <p>Download</p>
            <p>Pricing</p>
            <p>Locations</p>
            <p>Server</p>
            <p>Countries</p>
            <p>Blog</p>
          </div>
          <div className={scss.product}>
            <h4>Engage</h4>
            <p>LaslesVPN ? </p>
            <p>FAQ</p>
            <p>Tutorials</p>
            <p>About Us</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
          <div className={scss.product}>
            <h4>Earn Money</h4>
            <p>Affiliate</p>
            <p>Become Partner</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
