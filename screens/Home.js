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
import AppIntroSlider from 'react-native-app-intro-slider';

import { globalColors, globalFontSizes, screenDimensions } from "../properties/themes";
import {
	globalComponentPaddings,
	globalComponentMargins,
	globalComponentSizes,
} from "../properties/designs"
import relaxationThemes, {Beach, Rain} from "../data/MusicData";
import MusicThemes from "../data/MusicThemeTypes";
import SoundRelaxation from "../screens/SoundRelaxation";


const Home = () => {
	const [status, setStatus] = React.useState({});
	const video = React.useRef(null);
	const navigator = useNavigation();

	return(
		<SafeAreaView
			nativeID="total-device-screen-view"
			style={{
				width: '100%',
				height: '100%',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<ImageBackground
				nativeID="app-wallpaper"
				source={require("../assets/images/beach.png")}
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
						flex: 3,
					}}
				>
					<Text
						style={{
							color: globalColors.boneWhite,
							fontSize: 50,
						}}
					>Chily</Text>
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
						}}
						onPress={() => {
							navigator.navigate("SoundRelaxation");
						}}
					>
						<Text
							style={{
								color: globalColors.charcoalBlack,
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