async function getPlace(name, lat, lon) {
  try {
    const response = await fetch(`http://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=photo&input=${name}&inputtype=textquery&locationbias=point:${lat},${lon}&key=AIzaSyCWHg92SnwBm4EQnvzvzr5aKIaXd4gMV-I`);

    return response.json();
  } catch (error) {
    return error;
  }
}

async function getPhotoUrl(reference) {
  try {
    const response = await fetch(`http://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${reference}&key=AIzaSyCWHg92SnwBm4EQnvzvzr5aKIaXd4gMV-I`);

    return response.json();
  } catch (error) {
    return error;
  }
}

module.exports = { getPlace, getPhotoUrl };
