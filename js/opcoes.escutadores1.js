// Importar lista de URLs
importButton.addEventListener('click', () => {
  const urls = prompt('Insira a lista de URLs separadas por vírgula:');
  if (urls) {
    const urlArray = urls.split(',').map(url => url.trim());
    chrome.storage.sync.set({ urls: urlArray }, function() {
      urlListElement.innerHTML = '';
      urlArray.forEach(url => addUrlToList(url));
    });
  }
});

// Exportar lista de URLs
exportButton.addEventListener('click', () => {
  chrome.storage.sync.get(['urls'], function(result) {
    const urls = result.urls || [defaultUrl];
    alert(`Lista de URLs: ${urls.join(', ')}`);
  });
});

// Apagar lista de URLs
clearButton.addEventListener('click', () => {
  chrome.storage.sync.set({ urls: [defaultUrl] }, function() {
    urlListElement.innerHTML = '';
    addUrlToList(defaultUrl);
    document.getElementById('currentUrl').textContent = defaultUrl;
  });
});

