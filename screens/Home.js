import {
	Asset,
} from 'expo-asset';
import {
	Audio,
	Video,
	ResizeMode,
	AVPlaybackSourceObject,
	AVPlaybackSource,
} from 'expo-av';
import React from 'react';
import {
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	Image,
	Dimensions,
	ScrollView,
	ImageBackground,
	TouchableOpacity,
	Button,
	FlatList,
	Modal
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


import SoundButton from "../components/SoundButton";
import PlayListButton from "../components/PlayListButton";
import { globalColors, globalFontSizes, screenDimensions } from "../properties/themes";
import {
	globalComponentPaddings,
	globalComponentMargins,
	globalComponentSizes,
} from "../properties/designs";

import MusicData, { relaxationThemes, Beach, Rain } from "../data/MusicData";

import PlayListElementInfo from "../data/PlayListElementInfoTypes";
import MusicThemes from "../data/MusicThemeTypes";

import CategoryPanel from "../navigations/MusicCategoryNavigationHandler";
import BeachThemeView from "../navigations/BeachThemeView";
import RainThemeView from "../navigations/RainThemeView";
import ForestThemeView from "../navigations/ForestThemeView";
import MelodyThemeView from "../navigations/MelodyThemeView";
import UnderwaterThemeView from "../navigations/UnderwaterThemeView";
import OceanThemeView from "../navigations/OceanThemeView";
import WaterfallThemeView from "../navigations/WaterfallThemeView";


const Home = () => {
	const [status, setStatus] = React.useState({});
	const video = React.useRef(null);
	const navigator = useNavigation();

	return(
		<SafeAreaView
			nativeID="device-screen-total-view"
			style={{
				width: '100%',
				height: '100%',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<ImageBackground
				nativeID="app-wallpaper"
				source={require("../assets/images/relax_leaf.png")}
				style={{
					width: '100%',
					height: '100%',
					flexDirection: 'column'
				}}
			>
				<View
					nativeID="app-title"
					style={{
						alignSelf: 'center',
						alignItems: 'center',
						justifyContent: 'center',
						width: '50%',
						flex: 4,
					}}
				>
					<Image
						source={require("../assets/logo/Chily_2.png")}
						style={{
							width: 400,
							height: 160,
						}}
					/>
				</View>
				<View
					nativeID="navigate-relax-screen"
					style={{
						alignSelf: 'center',
						alignItems: 'center',
						justifyContent: 'center',
						width: '50%',
						flex: 2,
					}}
				>
					<TouchableOpacity
						style={{
							width: '80%',
							height: '16%',
							borderRadius: 25,
							borderWidth: 1,
							alignItems: 'center',
							justifyContent: 'center',
							backgroundColor: globalColors.cadmiumGreen,
							borderColor: globalColors.white,
							opacity: 0.7,
						}}
						onPress={() => {
							navigator.navigate("SoundRelaxation");
						}}
					>
						<Text
							style={{
								color: globalColors.white,
								fontSize: globalFontSizes.body3,
							}}
						>Start Relaxation</Text>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</SafeAreaView>
	)
};

export default Home;



/* 

	async function playVideo (videoSource) {
		console.log("Loading Video");
		const { video } = await Asset.loadAsync(videoSource); //useAssets(require("../assets/videos/sea_2.mp4"));
		setVideo(video);

		console.log('Playing Video');
		await video.shouldPlay();
	}

			<Video
				ref={video}
				style={styles.video}
				source={{
					videoURL: require("../assets/videos/sea_2.mp4"),
				}}
				useNativeControls
				resizeMode="contain"
				isLooping
				onPlaybackStatusUpdate={(status) => setStatus(() => status)}
			/>
*/