function $edda30d57e8d278c$var$accord(array, classActiveName) {
    for(let i = 0; i < array.length; i += 1)array[i].addEventListener("click", function accordion() {
        this.classList.toggle(`${classActiveName}`);
        const kind = this.classList[0].match(/answer\d/);
        const panel = document.getElementById(kind[0]);
        const section = document.getElementById(`question${kind[0][kind[0].length - 1]}`);
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            section.style.boxShadow = "none";
        } else {
            panel.style.maxHeight = `${panel.scrollHeight}px`;
            section.style.transitionDuration = ".5s";
            section.style.boxShadow = "0px -1px 62px -6px rgba(144,202,249,1)";
        }
    });
}
var $edda30d57e8d278c$export$2e2bcd8739ae039 = $edda30d57e8d278c$var$accord;


function $d47c243f7edc56cb$var$getCelciy(kelvin) {
    const temp = Math.round(kelvin - 273) * 10 / 10;
    if (temp > 0) return `+${temp}°C`;
    if (temp < 0) return `-${temp}°C`;
    return `${temp}°C`;
}
var $d47c243f7edc56cb$export$2e2bcd8739ae039 = $d47c243f7edc56cb$var$getCelciy;


const $54396c5f5cb68594$var$nightFrom = 21;
const $54396c5f5cb68594$var$nightTo = 6;
function $54396c5f5cb68594$var$isNight() {
    const currentTime = new Date();
    const currentHours = currentTime.getHours();
    if (currentHours > $54396c5f5cb68594$var$nightFrom || currentHours < $54396c5f5cb68594$var$nightTo) return true;
    return false;
}
var $54396c5f5cb68594$export$2e2bcd8739ae039 = $54396c5f5cb68594$var$isNight;


const $83750d83c99e0499$var$MMMM = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
function $83750d83c99e0499$var$fillWidget(cityFromServer) {
    if (cityFromServer.cod === "400") {
        const place = document.getElementById("place");
        place.textContent = "Type city";
    } else {
        const temp = document.getElementById("temp");
        if (cityFromServer.main.temp) temp.textContent = (0, $d47c243f7edc56cb$export$2e2bcd8739ae039)(cityFromServer.main.temp);
        const icon = document.getElementById("icon");
        const currentUrl = `url(http://openweathermap.org/img/wn/${cityFromServer.weather[0].icon}@2x.png)`;
        if ((0, $54396c5f5cb68594$export$2e2bcd8739ae039)()) {
            const nightLayoutUrl = currentUrl.replace(/d(?=@)/, "n");
            icon.style.backgroundImage = nightLayoutUrl;
        } else {
            const dayLayoutUrl = currentUrl.replace(/n(?=@)/, "d");
            icon.style.backgroundImage = dayLayoutUrl;
        }
        const kind = document.getElementById("short-kind");
        kind.textContent = cityFromServer.weather[0].main;
        const kindDescription = document.getElementById("long-kind");
        kindDescription.textContent = cityFromServer.weather[0].description;
        const place1 = document.getElementById("place");
        place1.textContent = `${cityFromServer.name}, ${cityFromServer.sys.country}`;
        const date = document.getElementById("date");
        const currentDate = new Date(cityFromServer.dt * 1000);
        date.textContent = `${currentDate.getDate()} ${$83750d83c99e0499$var$MMMM[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
        const min = document.getElementById("temp-min");
        min.textContent = (0, $d47c243f7edc56cb$export$2e2bcd8739ae039)(cityFromServer.main.temp_min);
        const max = document.getElementById("temp-max");
        max.textContent = (0, $d47c243f7edc56cb$export$2e2bcd8739ae039)(cityFromServer.main.temp_max);
    }
}
var $83750d83c99e0499$export$2e2bcd8739ae039 = $83750d83c99e0499$var$fillWidget;


async function $50b9e281f26da31a$export$ce1081f0c9899666(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=79b60acd04707a3adf97329d89451cf2`);
        return response.json();
    } catch (error) {
        return error;
    }
}
async function $50b9e281f26da31a$export$72dee2bbe2e51046(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/find?q=${city}&APPID=79b60acd04707a3adf97329d89451cf2`);
        return response.json();
    } catch (error) {
        return error;
    }
}
async function $50b9e281f26da31a$export$51869e65c904b671(lon, lat) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=79b60acd04707a3adf97329d89451cf2`);
        return response.json();
    } catch (error) {
        return error;
    }
}



const $8f48365d26231b8c$var$arrayTemp = [];
function $8f48365d26231b8c$var$createCard(nameCity, lon, lat, country) {
    const objForSave = {
        name: nameCity,
        lon: lon,
        lat: lat,
        country: country
    };
    const imagesContainer = document.createElement("div");
    imagesContainer.classList.add("card");
    imagesContainer.classList.add("cities__card");
    const imageButtonBox = document.createElement("div");
    imageButtonBox.classList.add("card__images");
    const imageFlag = document.createElement("img");
    imageButtonBox.appendChild(imageFlag);
    imageFlag.classList.add("card__image");
    imageFlag.setAttribute("crossorigin", "anonymous");
    if ((0, $54396c5f5cb68594$export$2e2bcd8739ae039)()) imageButtonBox.style.backgroundColor = "#2a344b";
    else imageButtonBox.style.backgroundColor = "#90caf9";
    const cardButton = document.createElement("button");
    cardButton.classList.add("card__button");
    imageFlag.setAttribute("src", `https://countryflagsapi.com/svg/${objForSave.country}`);
    // imageButtonBox.style.backgroundImage = `url(https://countryflagsapi.com/svg/${objForSave.country})`;
    if (nameCity) cardButton.textContent = nameCity;
    imageButtonBox.appendChild(cardButton);
    imagesContainer.appendChild(imageButtonBox);
    cardButton.addEventListener("click", ()=>{
        (0, $50b9e281f26da31a$export$51869e65c904b671)(lon, lat).then((result)=>{
            (0, $83750d83c99e0499$export$2e2bcd8739ae039)(result);
            imageFlag.setAttribute("src", `https://countryflagsapi.com/svg/${result.sys.country}`);
            // imageButtonBox.style.backgroundImage = `url(https://countryflagsapi.com/svg/${result.sys.country})`;
            objForSave.country = `${result.sys.country}`;
        });
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    });
    const boxImages = document.getElementById("box-images");
    const arrayOfCards = document.getElementsByClassName("cities__card");
    if (arrayOfCards.length === 5) boxImages.firstElementChild.remove();
    if ($8f48365d26231b8c$var$arrayTemp.length === 5) $8f48365d26231b8c$var$arrayTemp.shift();
    $8f48365d26231b8c$var$arrayTemp.push(objForSave);
    localStorage.setItem("obj", JSON.stringify($8f48365d26231b8c$var$arrayTemp));
    boxImages.appendChild(imagesContainer);
}
var $8f48365d26231b8c$export$2e2bcd8739ae039 = $8f48365d26231b8c$var$createCard;



function $71e8739d267cf879$var$clear() {
    const prevList = document.getElementsByClassName("dropdown");
    for(let i = 0; i < prevList.length; i += 1)prevList[i].remove();
}
var $71e8739d267cf879$export$2e2bcd8739ae039 = $71e8739d267cf879$var$clear;




function $15e3090e220d985c$var$createListDropDown(listCities) {
    const listContainer = document.createElement("div");
    listContainer.classList.add("dropdown");
    const list = document.createElement("ul");
    list.setAttribute("id", "list");
    list.classList.add("dropdown__list");
    listContainer.appendChild(list);
    const label = document.getElementById("label-search");
    const parentDiv = label.parentNode;
    let item;
    if (listCities instanceof Array) listCities.forEach((element)=>{
        item = document.createElement("li");
        item.setAttribute("data", `${element.name} ${element.sys.country} ${element.id} ${element.coord.lon} ${element.coord.lat}`);
        list.appendChild(item);
        item.textContent = `${element.name}, ${element.sys.country}`;
        if ((0, $54396c5f5cb68594$export$2e2bcd8739ae039)()) item.classList.toggle("dropdown__item-night");
        else item.classList.toggle("dropdown__item");
        item.addEventListener("click", ()=>{
            (0, $50b9e281f26da31a$export$51869e65c904b671)(element.coord.lon, element.coord.lat).then((result)=>{
                if (result) (0, $83750d83c99e0499$export$2e2bcd8739ae039)(result);
            });
            (0, $71e8739d267cf879$export$2e2bcd8739ae039)();
            (0, $8f48365d26231b8c$export$2e2bcd8739ae039)(element.name, element.coord.lon, element.coord.lat, element.sys.country);
        });
    });
    else {
        item = document.createElement("li");
        list.appendChild(item);
        item.textContent = "City not found!";
        if ((0, $54396c5f5cb68594$export$2e2bcd8739ae039)()) item.classList.toggle("dropdown__item-night");
        else item.classList.toggle("dropdown__item");
        item.addEventListener("click", ()=>{
            (0, $71e8739d267cf879$export$2e2bcd8739ae039)();
        });
    }
    parentDiv.insertBefore(listContainer, label);
}
var $15e3090e220d985c$export$2e2bcd8739ae039 = $15e3090e220d985c$var$createListDropDown;




function $6ee306fe090d0aea$var$allCities(value) {
    (0, $50b9e281f26da31a$export$72dee2bbe2e51046)(value).then((cityFromServer)=>{
        (0, $71e8739d267cf879$export$2e2bcd8739ae039)();
        if (cityFromServer.code === "400" || cityFromServer.count === 0) (0, $15e3090e220d985c$export$2e2bcd8739ae039)();
        else (0, $15e3090e220d985c$export$2e2bcd8739ae039)(cityFromServer.list);
    });
}
var $6ee306fe090d0aea$export$2e2bcd8739ae039 = $6ee306fe090d0aea$var$allCities;





function $3c79e00c5876802f$var$getDetails(value) {
    (0, $50b9e281f26da31a$export$ce1081f0c9899666)(value).then((result)=>{
        if (result.code === "400") (0, $15e3090e220d985c$export$2e2bcd8739ae039)();
        else (0, $83750d83c99e0499$export$2e2bcd8739ae039)(result);
    });
}
var $3c79e00c5876802f$export$2e2bcd8739ae039 = $3c79e00c5876802f$var$getDetails;




const $f9d83769637380d8$var$input = document.getElementById("search");
$f9d83769637380d8$var$input.addEventListener("keyup", (event)=>{
    (0, $6ee306fe090d0aea$export$2e2bcd8739ae039)(event.target.value);
    if (event.code === "Enter") (0, $3c79e00c5876802f$export$2e2bcd8739ae039)(event.target.value);
});
const $f9d83769637380d8$var$button = document.getElementById("button");
$f9d83769637380d8$var$button.addEventListener("click", ()=>{
    (0, $6ee306fe090d0aea$export$2e2bcd8739ae039)($f9d83769637380d8$var$input.value);
    (0, $3c79e00c5876802f$export$2e2bcd8739ae039)($f9d83769637380d8$var$input.value);
});
const $f9d83769637380d8$var$header = document.getElementById("header");
if ((0, $54396c5f5cb68594$export$2e2bcd8739ae039)()) {
    $f9d83769637380d8$var$header.classList.add("header-night");
    $f9d83769637380d8$var$button.style.backgroundColor = "#2a344b";
} else {
    $f9d83769637380d8$var$header.style.backgroundImage = "../images/day.png";
    $f9d83769637380d8$var$button.style.backgroundColor = "#90caf9";
}
let $f9d83769637380d8$var$saved = localStorage.getItem("obj");
if ($f9d83769637380d8$var$saved) {
    $f9d83769637380d8$var$saved = JSON.parse($f9d83769637380d8$var$saved);
    $f9d83769637380d8$var$saved.forEach((element)=>{
        (0, $8f48365d26231b8c$export$2e2bcd8739ae039)(element.name, element.lon, element.lat, element.country);
    });
}
const $f9d83769637380d8$var$acc = document.getElementsByClassName("accordion");
(0, $edda30d57e8d278c$export$2e2bcd8739ae039)($f9d83769637380d8$var$acc, "active-arrow");
const $f9d83769637380d8$var$fotterText = document.getElementById("footer-text");
$f9d83769637380d8$var$fotterText.textContent = `Vlasiuk Anatolii - ${new Date().getFullYear()}`;


//# sourceMappingURL=index.14fcd350.js.map
