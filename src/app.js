import WebTorrent from 'webtorrent/webtorrent.min';
import './style/style.css';

const client = new WebTorrent();
const rootElement = document.getElementById('root');
const inputElement = document.getElementById('magnet-in');
function addTorrent(torrentId) {
  client.add(torrentId, function(torrent) {
    // Torrents can contain many files. Let's use the .mp4 file
    const file = torrent.files.find(function(file) {
      return file.name.endsWith('.mp4');
    });

    // Display the file by adding it to the DOM. Supports video, audio, image, etc. files
    file.appendTo('#root');
  });
}

inputElement.addEventListener('input', e => {
  addTorrent(e.target.value);
  e.preventDefault();
});
