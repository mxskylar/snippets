const getParams = url => {
  const params = {
    searchTerm: null,
    shouldDownload: false
  };
  const urlParts = url.split('?');
  const queryParams = urlParts && urlParts.length >= 2 ? urlParts[1].split('&') : [];
  for (const param of queryParams) {
    const keyValue = param.split('=');
    const key = keyValue && keyValue.length > 0 ? keyValue[0] : null;
    const value = keyValue && keyValue.length >= 2 ? keyValue[1] : null;
    if (key === 'search') {
      params['searchTerm'] = value.toLowerCase();
    } else if (key === "download" && value === "true") {
      params['shouldDownload'] = true;
    }
  }
  return params;
};
const {searchTerm, shouldDownload} = getParams(window.location.href);
if (searchTerm) {
  sessionStorage.setItem('search', decodeURIComponent(searchTerm.replace('+', '%20')));
}
if (shouldDownload) {
  sessionStorage.setItem('download', 'true');
}
window.location = `${window.location.origin}${window.location.pathname}`;