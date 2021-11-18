const searchterm = new URL(window.location).searchParams.get("q") ?? "";

try {
  window.location = "https://duckduckgo.com/?q=" + searchterm;
} catch {
  window.location = "https://start.duckduckgo.com/";
}