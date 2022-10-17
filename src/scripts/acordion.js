function accord(array, classActiveName) {
  for (let i = 0; i < array.length; i += 1) {
    array[i].addEventListener('click', function accordion() {
      this.classList.toggle(`${classActiveName}`);

      const kind = this.classList[0].match(/answer\d/);
      const panel = document.getElementById(kind[0]);
      const section = document.getElementById(`question${kind[0][kind[0].length - 1]}`);

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        section.style.boxShadow = 'none';
      } else {
        panel.style.maxHeight = `${panel.scrollHeight}px`;
        section.style.transitionDuration = '.5s';
        section.style.boxShadow = '0px -1px 62px -6px rgba(144,202,249,1)';
      }
    });
  }
}
export default accord;
