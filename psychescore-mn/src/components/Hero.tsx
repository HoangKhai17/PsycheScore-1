import React from "react";

interface HeroProps {
  isConnected: boolean;
  onOpenConnect: () => void;
}

const Hero: React.FC<HeroProps> = ({
  isConnected,
  onOpenConnect,
}) => {
  if (isConnected) return null;

  return (
    <main className="hero-section">
      <div className="hero-content">
        <h1>
          Experience <span className="highlight">PsycheCredit</span> – The
          decentralized protocol
        </h1>
        <p>
          Unlock powerful AI tools for your business — deploy smart chatbots,
          automate workflows, analyze data, and more with zero coding. Scalable.
          Secure. Lightning fast.
        </p>
        <div className="cta-buttons">
          <button
            className="btn btn-primary"
            id="connectWalletBtn"
            onClick={onOpenConnect}
          >
            <i className="fa-solid fa-wallet"></i> Connect wallet
          </button>

          <a href="#" className="btn btn-secondary">
            Watch Demo
          </a>
        </div>
      </div>
    </main>
  );
};

export default Hero;

