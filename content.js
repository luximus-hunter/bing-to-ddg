const url = window.location.href;

if (url.includes('www.bing.com')) {
  try {
    const searchterm = url.split('?q=')[1].split('&')[0];
    window.location.replace('https://duckduckgo.com/?q=' + searchterm);
  } catch {
    window.location.replace('https://start.duckduckgo.com/');
  }
}
