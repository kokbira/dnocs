// Carregar URLs salvas
chrome.storage.sync.get(['cssUrl', 'urls'], function(result) {
  const currentUrl = result.cssUrl || defaultUrl;
  const urls = result.urls || [defaultUrl];
  document.getElementById('currentUrl').textContent = currentUrl;
  urls.forEach(url => addUrlToList(url));
});

function addUrlToList(url) {
  const li = document.createElement('li');
  li.textContent = url;

  const adoptButton = document.createElement('button');
  adoptButton.textContent = '✔';
  adoptButton.addEventListener('click', () => {
    chrome.storage.sync.set({ cssUrl: url }, function() {
      document.getElementById('currentUrl').textContent = url;
    });
  });

  const removeButton = document.createElement('button');
  removeButton.textContent = '✖';
  removeButton.addEventListener('click', () => {
    li.remove();
    removeUrl(url);
  });

  li.appendChild(adoptButton);
  li.appendChild(removeButton);
  urlListElement.appendChild(li);
}

function saveUrl(url) {
  chrome.storage.sync.get(['urls'], function(result) {
    const urls = result.urls || [];
    if (!urls.includes(url)) {
      urls.push(url);
      chrome.storage.sync.set({ urls: urls });
    }
  });
}

function removeUrl(url) {
  chrome.storage.sync.get(['urls'], function(result) {
    const urls = result.urls || [];
    const updatedUrls = urls.filter(u => u !== url);
    chrome.storage.sync.set({ urls: updatedUrls });
  });
}
