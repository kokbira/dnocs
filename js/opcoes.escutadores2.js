// Fechar modal
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Salvar URL
modalSaveButton.addEventListener('click', () => {
  const cssUrl = newUrlInput.value;
  saveUrl(cssUrl);
  addUrlToList(cssUrl);
  document.getElementById('currentUrl').textContent = cssUrl;
  modal.style.display = 'none';
});

// Habilitar/desabilitar botões com base na entrada
newUrlInput.addEventListener('input', () => {
  const cssUrl = newUrlInput.value;
  const isValidUrl = cssUrl.trim() !== '';
  testButton.disabled = !isValidUrl;
});

