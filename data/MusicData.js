import {
   Audio,
   Video,
} from 'expo-av';
import {

} from 'expo';

// Music import
export const sample_1 = require("../assets/audios/sample_1.mp3");

export const rain_night = require("../assets/audios/rain_thunder/rain_night.mp3");
export const rain_on_window = require("../assets/audios/rain_thunder/rain_on_window.wav");
export const rain_thunder = require("../assets/audios/rain_thunder/rain_thunder_1.wav");
export const thunder = require("../assets/audios/rain_thunder/thunder.wav");
export const wind = require("../assets/audios/rain_thunder/wind.mp3");


// Music collections
export const Beach = [
   {
      id: "01",
      name: "sample_1",
      source: sample_1,
   }
];

export const Rain = [
   {
      id: "01",
      name: "raining night",
      source: rain_night,
   },
   {
      id: "02",
      name: "raining on window",
      source: rain_on_window,
   },
   {
      id: "03",
      name: "raining & thunder",
      source: rain_thunder,
   },
   {
      id: "04",
      name: "thunder",
      source: thunder,
   },
   {
      id: "05",
      name: "wind",
      source: wind,
   },
];

export const Sea = [

];

export const Waterfall = [

];

export const Ocean = [

];

export const Material = [

];

export const Forest = [

];

export const Urban = [

];

export const Rural = [

];

export default {
   Beach,
   Sea,
   Waterfall,
   Ocean,
   Material,
   Forest,
   Urban,
   Rural,
   Rain,
}