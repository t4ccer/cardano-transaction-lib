const createOption = (label, value) => {
  const option = document.createElement("option");
  option.value = value;
  option.innerHTML = label;
  return option;
};

exports._queryString = () => window.location.search;

exports._createWalletOptions = walletNames => changeListener => () => {
  const walletSelect = document.getElementById("wallet-select");
  walletSelect.innerHTML = "";
  walletSelect.appendChild(createOption("Select a wallet", ""));
  walletNames.forEach(walletName => {
    walletSelect.appendChild(createOption(walletName, walletName));
  });
  walletSelect.addEventListener("change", e =>
    changeListener(e.target.value)()
  );
};
