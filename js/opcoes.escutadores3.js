// Testar URL
testButton.addEventListener('click', () => {
  const cssUrl = newUrlInput.value;
  fetch(cssUrl, { method: 'HEAD' })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        throw new Error(`Erro: ${response.status} - ${response.statusText}`);
      }
    })
    .then(response => {
      const corsHeaders = {
        'Access-Control-Allow-Origin': response.headers.get('Access-Control-Allow-Origin'),
        'Access-Control-Allow-Methods': response.headers.get('Access-Control-Allow-Methods'),
        'Access-Control-Allow-Headers': response.headers.get('Access-Control-Allow-Headers')
      };

      if (corsHeaders['Access-Control-Allow-Origin'] !== null && corsHeaders['Access-Control-Allow-Methods'] !== null && corsHeaders['Access-Control-Allow-Headers'] !== null) {
        modalResults.textContent = 'URL válida e acessível. Cabeçalhos CORS estão corretos.';
        modalSaveButton.disabled = false;
      } else {
        modalResults.textContent = 'Erro: Cabeçalhos CORS não estão configurados corretamente.';
        modalSaveButton.disabled = true;
      }
      modal.style.display = 'block';
    })
    .catch(error => {
      modalResults.textContent = `Erro ao acessar a URL: ${error.message}`;
      modalSaveButton.disabled = true;
      modal.style.display = 'block';
    });
});

// Aplicar a URL
modalSaveButton.addEventListener('click', () => {
  const cssUrl = newUrlInput.value;
  chrome.storage.sync.set({ cssUrl: cssUrl }, function() {
    document.getElementById('currentUrl').textContent = cssUrl;
    saveUrl(cssUrl);
    addUrlToList(cssUrl);
  });
  modal.style.display = 'none';
});

// Salvar Mesmo Assim
document.getElementById('modal-force-save').addEventListener('click', () => {
  const cssUrl = newUrlInput.value;
  chrome.storage.sync.set({ cssUrl: cssUrl }, function() {
    document.getElementById('currentUrl').textContent = cssUrl;
    saveUrl(cssUrl);
    addUrlToList(cssUrl);
  });
  modal.style.display = 'none';
});
