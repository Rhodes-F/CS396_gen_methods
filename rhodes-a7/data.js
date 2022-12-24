// A place for utility functions, if you need any
import { hexToHSL, quickdrawToVectors } from "./utilities.js";

import catsData from "./data/quickdraw-cats-small.json" assert {type: "json"};
import palettes from "./data/colorlovers-palettes.json" assert {type: "json"};
import xkcdColors from "./data/xkcd-colors.json" assert {type: "json"};
import wikiColors from "./data/wikipedia-colors.json" assert {type: "json"};
import weatherData from "https://api.open-meteo.com/v1/forecast?latitude=42.04&longitude=-87.69&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&timezone=auto" assert {type: "json"};


console.log("....Loading data");
console.log(typeof weatherData)
console.log(weatherData.daily.temperature_2m_max)
console.log("pineapple")
//==================================
// API example
// function loadGutendexData(topic) {
//   console.log("REQUEST DATA");
//   let url = f`https://gutendex.com/books/?topic=${topic}`;
//   console.log("Fetch URL", topic);
//   fetch(url, {})
//     .then((res) => res.json())
//     .then((out) => console.log("Checkout this JSON! ", out))
//     .catch((err) => {
//       throw err;
//     });
// }
// loadGutendexData("pirates")
//==================================


// Load and preprocess any data

// Preprocess data

// Often its useful to store your data
// (planets, movies, colors, soccer matches,etc),
// in a class for easier access
class Color {
  constructor({ hex, name, source }) {
    this.hex = hex;
    this.name = name;
    this.hsl = hexToHSL(hex);
    this.source = source;
  }
}
let temps = {temp:weatherData.hourly.temperature_2m, minTemp: weatherData.daily.temperature_2m_min, maxTemp: weatherData.daily.temperature_2m_max};
// XKCD
let colors = xkcdColors.colors.map(
  (c) => new Color({ hex: c.hex, name: c.color, source: "xkcd" })
);

console.log(wikiColors)
let wikiProcessed = wikiColors.map(
  (c) => new Color({ hex: c.color, name: c.name, source: "wiki" })
)
console.log(wikiColors)
colors = colors.concat(wikiProcessed)


let cats = catsData.map(c => quickdrawToVectors(c))

console.log(colors)

// What data we want to export to our visualization app?
let data = {
  cats: cats,
  colors: colors,
  temps: temps
};

export { data };
