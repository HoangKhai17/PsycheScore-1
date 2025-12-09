const connectWalletBtn = document.getElementById('connectWalletBtn');
const walletPopup = document.getElementById('walletPopup');
const closePopupBtn = document.getElementById('closePopupBtn');

connectWalletBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    walletPopup.style.display = 'flex';
});

closePopupBtn.addEventListener('click', () => {
    walletPopup.style.display = 'none';
});

// Close popup when clicking on the overlay
walletPopup.addEventListener('click', (e) => {
    if (e.target === walletPopup) {
        walletPopup.style.display = 'none';
    }
});


document.getElementById('copyWalletAddress').addEventListener('click', function() {
    const fullAddress = document.querySelector('.wallet-address-btn .hidden').textContent;
    const copyIcon = this;

    navigator.clipboard.writeText(fullAddress).then(() => {
        // Success feedback
        copyIcon.classList.remove('fa-copy');
        copyIcon.classList.add('fa-check');
        
        setTimeout(() => {
            copyIcon.classList.remove('fa-check');
            copyIcon.classList.add('fa-copy');
        }, 1000); // Revert back to copy icon after 1.5 seconds
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
});