function clear() {
  const prevList = document.getElementsByClassName('dropdown');

  for (let i = 0; i < prevList.length; i += 1) {
    prevList[i].remove();
  }
}

export default clear;
