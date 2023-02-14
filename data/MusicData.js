import {
	Audio,
	Video,
} from 'expo-av';
import MusicThemes from "./MusicThemeTypes";

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
	},
	{
		id: "02",
		name: "sample_2",
		source: sample_1,
	},
	{
		id: "03",
		name: "sample_2",
		source: sample_1,
	},
	{
		id: "04",
		name: "sample_2",
		source: sample_1,
	},
	{
		id: "05",
		name: "sample_2",
		source: sample_1,
	},
	{
		id: "06",
		name: "sample_2",
		source: sample_1,
	},
	{
		id: "07",
		name: "sample_2",
		source: sample_1,
	},
	{
		id: "08",
		name: "sample_2",
		source: sample_1,
	},
	{
		id: "09",
		name: "sample_2",
		source: sample_1,
	},
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
	{
		id: "06",
		name: "wind",
		source: wind,
	},
	{
		id: "07",
		name: "wind",
		source: wind,
	},
	{
		id: "08",
		name: "wind",
		source: wind,
	},
	{
		id: "09",
		name: "wind",
		source: wind,
	},
];

export const Melody = [

];

export const Waterfall = [

];

export const Ocean = [

];

export const Underwater = [

];

export const Forest = [

];

export const relaxationThemes = [
	{
		themeID: 1,
		name: "Rain",
		theme: Rain,
		image: require("../assets/images/rain.png"),
	},
	{
		themeID: 2,
		name: "Beach & Sea",
		theme: Beach,
		image: require("../assets/images/beach.png"),
	}
];

export default {
	relaxationThemes,

	Beach,
	Melody,
	Waterfall,
	Ocean,
	Underwater,
	Forest,
	Rain,
}