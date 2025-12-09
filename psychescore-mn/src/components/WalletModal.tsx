import React from "react";
import imgLace from "../publish/img/lace.png";
import imgYoroi from "../publish/img/yoroi.png";
import imgMidnight from "../publish/img/midnight.png";

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConnectLace: () => void;
}

const WalletModal: React.FC<WalletModalProps> = ({
  isOpen,
  onClose,
  onConnectLace,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="wallet-popup-overlay"
      id="walletPopup"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="wallet-popup">
        <div className="popup-header">
          <h2>Connect Wallet</h2>
          <button className="close-btn" onClick={onClose} id="closePopupBtn">
            &times;
          </button>
        </div>
        <p className="popup-subheading">Choose how you want to connect</p>
        <ul className="wallet-list">
          <li
            className="wallet-item"
            onClick={() => {
              onConnectLace();
            }}
            style={{ cursor: "pointer" }}
          >
            <a>
              <img src={imgLace} alt="Lace Wallet" />
              Lace wallet
            </a>
          </li>
          <li className="wallet-item">
            <a href="#">
              <img src={imgYoroi} alt="Yoroi Wallet" />
              Yoroi (coming soon)
            </a>
          </li>

          <li
            className="wallet-item"
            style={{ cursor: "not-allowed", opacity: 0.6 }}
          >
            <a>
              <img src={imgMidnight} alt="Midnight" />
              Midnight (coming soon)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WalletModal;

