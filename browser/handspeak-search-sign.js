const searchTerm = sessionStorage.getItem('search');
if (searchTerm) {
  sessionStorage.removeItem('search');
  const searchBar = document.querySelectorAll('input[type="search"]')[0];
  searchBar.value = decodeURIComponent(searchTerm.toLowerCase());
  searchBar.addEventListener('keyup', e => {
    const searchedTerm = e.srcElement.value;
    setTimeout(term => {
      const searchResultLists = document.querySelectorAll('ul[class="col-abc"]');
      const searchResults = searchResultLists && searchResultLists.length > 0 ? searchResultLists[0] : null;
      const matches = searchResults ? searchResults.querySelectorAll('li') : [];
      const getUrlForExactMatch = (matches, term) => {
        for (const match of matches) {
          if (match.innerText.toLowerCase() === term) {
            const links = match.querySelectorAll('a');
            return links && links.length > 0 ? links[0].href : null;
          }
        }
        return null;
      };
      const exactMatchUrl = getUrlForExactMatch(matches, term);
      if (exactMatchUrl) {
        window.location = exactMatchUrl;
      }
    }, 1000, searchedTerm);
  });
  searchBar.dispatchEvent(new Event('keyup'));
}