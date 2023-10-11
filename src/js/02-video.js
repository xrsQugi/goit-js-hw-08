import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const current_time = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem(current_time, seconds);
}
function setCurrentTime() {
  if (!localStorage.getItem(current_time)) return;
  player.setCurrentTime(localStorage.getItem(current_time));
}

setCurrentTime();


player
  .setColors(['#000000', '#ffffff'])
  .then(function (color) {
    console.log('--- Color values updated ---');
  })
  .catch(function (error) {
    console.log('An error occurred while setting the color');
  });
