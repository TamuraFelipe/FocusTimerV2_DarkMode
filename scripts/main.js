import {
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonMinus,
  btnFlorest,
  btnRain,
  btnCoffeeShop,
  btnFirePlace,
  btnLightMode,
  btnDarkMode,
  
} from "./elements.js";
import Sounds from "./sounds.js";
import Controls from "./controls.js";
import DarkMode from "./darkMode.js";
import Focus from "./focus.js";
import volume from "./volume.js";

const sound = Sounds();
const controls = Controls({});
const darkMode = DarkMode();

//Events JS
buttonPlay.addEventListener("click", controls.playTimer);
buttonStop.addEventListener("click", controls.stopTimer);
buttonPlus.addEventListener("click", controls.plusTimer);
buttonMinus.addEventListener("click", controls.minusTimer);

btnFlorest.addEventListener("click", sound.playFlorest);
btnRain.addEventListener("click", sound.playRain);
btnCoffeeShop.addEventListener("click", sound.playCoffeeShop);
btnFirePlace.addEventListener("click", sound.playFirePlace);

btnLightMode.addEventListener('click', darkMode.activeDark);
btnDarkMode.addEventListener('click', darkMode.activeLigth);
