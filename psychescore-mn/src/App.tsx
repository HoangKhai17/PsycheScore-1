import React, { useMemo, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WalletModal from "./components/WalletModal";
import Footer from "./components/Footer";

type SupportedWallet = "lace";

const App: React.FC = () => {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  // 2. Thêm state để quản lý việc Ẩn/Hiện Popup
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const shortWalletAddress = useMemo(() => {
    if (!walletAddress) return "";
    if (walletAddress.length <= 12) return walletAddress;
    return `${walletAddress.slice(0, 6)}...${walletAddress.slice(-6)}`;
  }, [walletAddress]);

  const handleCopyAddress = async () => {
    if (!walletAddress) {
      alert("No wallet address to copy. Please connect first.");
      return;
    }
    try {
      await navigator.clipboard.writeText(walletAddress);
      alert("Wallet address copied.");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      alert(`Failed to copy address: ${message}`);
    }
  };

  const handleConnect = async (wallet: SupportedWallet) => {
    setIsModalOpen(false);
    let connected = false;
    let address = null;

    try {
      switch (wallet) {
        case "lace": {
          if (!window.midnight?.mnLace) {
            alert(
              "Lace wallet not detected. Please install the Lace browser extension to connect."
            );
            return;
          }

          const connectorAPI = await window.midnight.mnLace.enable();
          const isEnabled = await window.midnight.mnLace.isEnabled();
          if (isEnabled) {
            connected = true;
            const state = await connectorAPI.state?.();
            address = state?.address ?? null;
            alert("Lace wallet connected successfully.");
          } else {
            alert(
              "Wallet connection was not authorized. Please approve the request in Lace."
            );
          }
          break;
        }
        default:
          alert("Unsupported wallet selection.");
          return;
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      alert(`Failed to connect wallet: ${errorMessage}`);
    }

    setIsConnected(connected);
    setWalletAddress(address);
  };

  const handleDisconnect = () => {
    setWalletAddress(null);
    setIsConnected(false);
  };

  return (
    <>
      <Header
        isConnected={isConnected}
        walletAddress={walletAddress}
        shortWalletAddress={shortWalletAddress}
        onCopyAddress={handleCopyAddress}
        onDisconnect={handleDisconnect}
      />
      <div className="container">
        <Hero
          isConnected={isConnected}
          onOpenConnect={() => setIsModalOpen(true)}
        />
        <Footer />
      </div>

      <WalletModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConnectLace={() => void handleConnect("lace")}
      />
    </>
  );
};

export default App;
