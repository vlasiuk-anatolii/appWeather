const nightFrom = 21;
const nightTo = 6;

function isNight() {
  const currentTime = new Date();
  const currentHours = currentTime.getHours();

  if (currentHours > nightFrom || currentHours < nightTo) {
    return true;
  }
  return false;
}
export default isNight;
