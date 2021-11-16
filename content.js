const url = window.location.href;
const baseDdgUrl = 'https://duckduckgo.com/';

if (url.includes('www.bing.com')) {
  try {
    const searchterm = url.split('?q=')[1].split('&')[0];
    window.location.replace(baseDdgUrl + '?q=' + searchterm);
  } catch {
    window.location.replace(baseDdgUrl);
  }
}
