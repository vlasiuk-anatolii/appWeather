# Weather app
- [DEMO LINK](https://vlasiuk-anatolii.github.io)
- [Video](https://www.loom.com/share/a30a10b608fa4ed0941657a77a5a99b0)

## Description
Weather app was implemented using a provided layout and free weather API with pure vanilla Javascript, HTML and CSS/SASS.

[Design](https://www.figma.com/file/MV15v0asVZlLyYCJvoXXth/SK-Internship-Weather-App?node-id=0%3A1).

[Free Weather API](https://openweathermap.org/)

### Implemented Tasks
- Implemented layout with HTML/CSS/JS (without frameworks and libraries).
- App has four areas: 
  * header includes search input, weather widget and background image changes depends on current time;
  * "Recently you checked weather in the cities" includes 5 cards latest checked cities;
  * "Frequently Asked Questions" includes four accordeons were created with smooth opening/closing;
  * footer includes fullname of author and dynamically changed year;
  
[Apearance](https://prnt.sc/ID0teyZOI40P)
  
### Features
  - The user enters their city name in the search box at the top of the page and press Enter / Click search button.
  - The user can see a dropdown with the list of found cities or notice "City not found!".
  - When the user clicks on the found city - user can see selected city weather data in the main weather widget.
  - When the user clicks on the card with the checked city - user can see selected city weather data in the main weather widget.
  - FAQ dropdowns work. (Open / close)
  - The app is responsive for all modern devices.
  - The App has “day” and “night” mode. If user time is between 21:00 and 06:00 - app uses “night” layout, in the other case (from 06:00 to 21:00)
it uses “day” layout.

[Day layout](https://prnt.sc/rImzqlDqKrdM)

[Night layout](https://prnt.sc/kThMPJsixy3A)

  - App shows not more than 5 latest cities with success checked weather in the "Recently you checked weather in the cities"(even if user refreshes the page)
  - If cities are two and more then app throws dropdown with list of cities.
  
 [Search dropdown](https://prnt.sc/vXHwhdLS58qH)
 
### Development environment
* VS Code

### devDependencies
- JS
- HTML
- SCSS
- ESlint
- stylelint
- Node v14.18.2 and higher
- NPM v6.14.12 and higher

### Installing
* Fork and clone this repository
* Run `npm install` in your terminal
* Run `npm start`