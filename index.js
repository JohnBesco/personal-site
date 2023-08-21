function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const blob = document.querySelector(".blob");
blob.style.animation = `blobAnimation 10s infinite ease-in-out`;
blob.style.animationKeyframes = `
    0%, 100% {
      border-radius: ${getRandom(10, 70)}%;
      transform: translate(-${getRandom(20, 50)}%, -${getRandom(40, 50)}%);
    }
    25% {
      border-radius: ${getRandom(20, 70)}%;
      transform: translate(-${getRandom(10, 60)}%, -${getRandom(30, 60)}%);
    }
    50% {
      border-radius: ${getRandom(20, 70)}%;
      transform: translate(-${getRandom(10, 40)}%, -${getRandom(20, 40)}%);
    }
    75% {
      border-radius: ${getRandom(30, 70)}%;
      transform: translate(-${getRandom(30, 60)}%, -${getRandom(30, 60)}%);
    }
  `;
