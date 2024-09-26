chrome.storage.sync.get(['cssUrl'], function(result) {
  const cssUrl = result.cssUrl || 'https://sso.acesso.gov.br/assets/govbr/fontawesome/css/all.min.css';
  
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
      if (link.href === "https://use.fontawesome.com/releases/v6.4.2/css/all.css") {
        link.remove();
      }
    });

    const newLink = document.createElement('link');
    newLink.rel = 'stylesheet';
    newLink.href = cssUrl;
    newLink.crossOrigin = 'anonymous';
    document.head.appendChild(newLink);
  });
});
