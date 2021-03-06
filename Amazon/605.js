var canPlaceFlowers = function (flowerbed, n) {
  const len = flowerbed.length;
  for (let i = 0; i < len && n > 0; ) {
    if (flowerbed[i] === 1) {
      i += 2;
    } else if (i === len - 1 || flowerbed[i + 1] === 0) {
      n--;
      i += 2;
    } else {
      i += 3;
    }
  }
  return n <= 0;
};
