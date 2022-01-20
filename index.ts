import './style.css';

import { of, map, from, Observable } from 'rxjs';

function createRandomTime() {
  function delay() {
    return new Promise<void>((resolve) => {
      const randomTime = Math.floor(Math.random() * 10);
      setTimeout(() => {
        resolve();
      }, randomTime * 1000);
    });
  }

  async function* generateRandom() {
    let i = 0;
    while (true) {
      await delay();
      yield i++;
    }
  }
  return from(generateRandom());
}

const source = createRandomTime();
source.subscribe((val) => console.log(val));
