const cropSubtitlesParams = new URLSearchParams(window.location.search);
window.location.href = `https://mxskylar.github.io/browser-snippets/cropped-subtitles-youtube-viewer?v=${cropSubtitlesParams.get("v")}`;
