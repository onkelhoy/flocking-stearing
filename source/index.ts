import { Update, Render } from './Draw';

let canvas, ctx, timer: number;

async function init(): Promise<void> {
  canvas = document.querySelector('canvas');

  if (!canvas) throw new Error('No canvas found');
  ctx = canvas.getContext('2d');

  await Load();
  GameLoop();
}

async function Load(): Promise<void> {

}

function GameLoop() {
  if (!window.pause) {
    Update();
    Render();

    timer = requestAnimationFrame(GameLoop);
  }
  else {
    cancelAnimationFrame(timer);
  }
}

window.onload = init;

export {};