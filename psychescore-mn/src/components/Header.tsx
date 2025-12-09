import React from "react";
import logoWhite from "../publish/img/psylogo_white.png";

interface HeaderProps {
  isConnected: boolean;
  walletAddress: string | null;
  shortWalletAddress: string;
  onCopyAddress: () => void;
  onDisconnect: () => void;
}

const Header: React.FC<HeaderProps> = ({
  isConnected,
  walletAddress,
  shortWalletAddress,
  onCopyAddress,
  onDisconnect,
}) => {
  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <a href="#" className="logo">
            <img src={logoWhite} alt="PsycheScore Logo" />
          </a>
          <div className="nav-right">
            <button id="theme-toggle" className="theme-toggle-btn">
              <i className="fa-solid fa-moon"></i>
            </button>
            {isConnected && walletAddress ? (
              <button
                type="button"
                className="btn btn-secondary wallet-address-btn"
                title={walletAddress}
                onClick={onCopyAddress}
                id="copyWalletAddress"
              >
                <span id="walletAddressDisplay">{shortWalletAddress}</span>
                <span className="hidden">{walletAddress}</span>
                <i className="fa-regular fa-copy copy-icon"></i>
              </button>
            ) : null}
            {!isConnected ? (
              <a href="#" className="btn btn-secondary">
                <i className="fa-solid fa-file-lines"></i>
                Whitepaper
              </a>
            ) : (
              <button className="btn btn-primary" onClick={onDisconnect}>
                <i className="fa-solid fa-wallet"></i>
                Disconnect
              </button>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

