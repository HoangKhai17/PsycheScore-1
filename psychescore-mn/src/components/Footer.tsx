import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="social-icons">
        <a href="#">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fab fa-telegram"></i>
        </a>
      </div>
      <div className="copyright">
        <p>&copy; 2025. PsycheScore</p>
      </div>
    </footer>
  );
};

export default Footer;

