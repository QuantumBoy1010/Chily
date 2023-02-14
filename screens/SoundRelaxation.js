import { Audio } from 'expo-av';
import React from 'react';
import {
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView,
	ImageBackground,
	TouchableOpacity,
	Button,
	FlatList,
	Modal
} from 'react-native';
import 'core-js/features/array/at';
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AppIntroSlider from 'react-native-app-intro-slider';

import SoundButton from "../components/SoundButton";
import { globalColors, globalFontSizes, screenDimensions } from "../properties/themes";
import {
	globalComponentPaddings,
	globalComponentMargins,
	globalComponentSizes,
} from "../properties/designs"
import MusicData, {relaxationThemes, Beach, Rain} from "../data/MusicData";
import MusicThemes from "../data/MusicThemeTypes";
import musicThemeTypes from "../data/MusicThemeTypes";
import CategoryPanel from "../navigations/MusicCategoryNavigationHandler";
import BeachThemeView from "../navigations/BeachThemeView";
import RainThemeView from "../navigations/RainThemeView";
import ForestThemeView from "../navigations/ForestThemeView";
import MelodyThemeView from "../navigations/MelodyThemeView";
import UnderwaterThemeView from "../navigations/UnderwaterThemeView";
import OceanThemeView from "../navigations/OceanThemeView";
import WaterfallThemeView from "../navigations/WaterfallThemeView";

const CategoryTab = createMaterialTopTabNavigator();

const SoundRelaxation = () => {
	const deviceWidth = screenDimensions.windowWidth;
	const deviceHeight = screenDimensions.windowHeight;

	const [sound, setSound] = React.useState(new Audio.Sound);

	async function playSound (soundSource) {
		console.log("Loading Sound");
		const { sound } = await Audio.Sound.createAsync(soundSource); //"../assets/audios/counting_star.mp3"
		setSound(sound);

		console.log('Playing Sound');
		await sound.playAsync();
	}

	React.useEffect(() => {
		return sound
			? () => {
				sound.unloadAsync().then(r => null);
			}
			: undefined;
	}, [sound]);

	const musicData = relaxationThemes.filter(object => {
		return object.theme;
	});


	//Rendering functions

	/*function renderMusicVolumeControlBar(barWidth,barHeight,controlViewWidth,controlViewHeight,currentPlayingAudio)
	{
		const smallestVolume = 0;
		const biggestVolume = 100;
		const [audioVolume, setAudioVolume] = React.useState(currentPlayingAudio.volume);
		var horizontalPointerOffset = 0;
		const [mousePointerPosition, setMousePointerPosition] = React.useState({ x: 0, y: 0 });
		const [currentVolumePointerPosition, setCurrentVolumePointerPosition] = React.useState({ x: 0, y: 0 });

		const handleVolumePointerMove = event => {
			setCurrentVolumePointerPosition({
				x: event.clientX - event.target.offsetLeft,
				y: event.clientY - event.target.offsetTop,
			});

			useEffect(() => {
				const handleMousePointerMove = event => {
					setMousePointerPosition({
						x: event.clientX,
						y: event.clientY,
					});
				};
				window.addEventListener('mousemove', handleMousePointerMove);

				return () => {
					window.removeEventListener(
						'mousemove',
						handleMousePointerMove,
					);
				};
			}, []);
		}

		return (
			<View
				nativeID="volume-control-total-view"
				style={{
					width: controlViewWidth,
					height: controlViewHeight,
				}}
			>
				<View
					nativeID="volume-control-bar"
					style={{
						width: barWidth,
						height: barHeight,
					}}
				>
					<TouchableOpacity
						style={{
							width: 10,
							height: 10,
							borderRadius: 100,
							backgroundColor: globalColors.jetBlack,
							position: 'relative',
							marginLeft: currentVolumePointerPosition.x,
						}}
						onPressIn={({ currentVolumePointerPosition }) => {
							horizontalPointerOffset = currentVolumePointerPosition.x;
							setCurrentVolumePointerPosition(horizontalPointerOffset);
							setAudioVolume(audioVolume + (biggestVolume - smallestVolume) * currentVolumePointerPosition.x / barWidth);
						}}
					>

					</TouchableOpacity>
				</View>
			</View>
		)
	}*/


	return (
		<SafeAreaView
			nativeID="total-device-screen-view"
			style={{
				width: '100%',
				height: '100%',
				backgroundColor: globalColors.boneWhite,
				flexDirection: 'column'
			}}
		>
			<ImageBackground
				nativeID="app-wallpaper"
				source={require("../assets/images/beach.png")}
				style={{
					width: '100%',
					height: '100%',
				}}
			>
				<View
					nativeID="upper-panel"
					style={{
						width: '100%',
						flex: 2,
						backgroundColor: globalColors.jadeGreen,
						opacity: 0.7,
						borderBottomWidth: 2,
						borderBottomColor: globalColors.grassGreen,
					}}
				>

				</View>

				<View
					nativeID="main-content"
					style={{
						width: '100%',
						flex: 15,
						marginTop: 5,
						alignItems: 'center',
						justifyContent: 'center',
						flexDirection: 'column',
					}}
				>
					<View
						nativeID="music-viewer"
						style={{
							flex: 10,
							width: '94%',
							marginTop: 7,
							marginBottom: 7,
							alignItems: 'center',
							justifyContent: 'center',
							backgroundColor: globalColors.skyBlue,
							opacity: 0.81,
							borderRadius: 16,
							flexDirection: (deviceWidth > 500) ? 'row' : 'column',
						}}
					>
						<View
							nativeID="app-title"
							style={{
								flex: 1,
								marginTop: 4,
								marginBottom: 2,
								marginLeft: 2,
								marginRight: 2,
								borderWidth: 1,
								borderColor: globalColors.white,
								borderRadius: 20,
								width: '94%',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<Text
								style={{
									fontSize: globalFontSizes.h3,
									color: globalColors.white,
								}}
							>Chily</Text>
						</View>
						<View
							nativeID="relaxation-music-grid"
							style={{
								flex: 8,
								marginTop: 2,
								marginBottom: 4,
								marginLeft: 2,
								marginRight: 2,
								borderWidth: 1,
								borderColor: globalColors.white,
								borderRadius: 12,
								width: '97%',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<CategoryTab.Navigator
								nativeID="category-viewer"
								screenOptions={{
									tabBarLabelStyle: { fontSize: 12 },
									tabBarItemStyle: { width: 100 },
									tabBarStyle: { backgroundColor: globalColors.powderBlue },
									swipeEnabled: true,
									tabBarScrollEnabled: true,
									tabBarActiveTintColor: globalColors.white,
									tabBarInactiveTintColor: globalColors.jadeGreen,
									lazy: false,
								}}
								style={{
									height: '100%',
									width: '100%',
									borderRadius: 10,
									opacity: 0.81,
								}}
							>
								<CategoryTab.Screen
									name="Beach"
									component={BeachThemeView}
									options={{
										tabBarLabel: "Beach",
									}}
								/>
								<CategoryTab.Screen
									name="Rain"
									component={RainThemeView}
									options={{
										tabBarLabel: "Rain",
									}}
								/>
								<CategoryTab.Screen
									name="Forest"
									component={ForestThemeView}
									options={{
										tabBarLabel: "Forest",
									}}
								/>
								<CategoryTab.Screen
									name="Ocean"
									component={OceanThemeView}
									options={{
										tabBarLabel: "Ocean",
									}}
								/>
								<CategoryTab.Screen
									name="Underwater"
									component={UnderwaterThemeView}
									options={{
										tabBarLabel: "Underwater",
									}}
								/>
								<CategoryTab.Screen
									name="Waterfall"
									component={WaterfallThemeView}
									options={{
										tabBarLabel: "Waterfall",
									}}
								/>
								<CategoryTab.Screen
									name="Melody"
									component={MelodyThemeView}
									options={{
										tabBarLabel: "Melody",
									}}
								/>
							</CategoryTab.Navigator>
						</View>
					</View>

					<View
						nativeID="playlist-viewer"
						style={{
							flex: 1,
							height: '100%',
							width: '90%',
							backgroundColor: globalColors.charcoalBlack,
							alignItems: 'center',
							alignSelf: 'center',
							justifyContent: 'center',
							borderWidth: 1,
							borderColor: globalColors.white,
							opacity: 0.5,
							borderRadius: 25,
							marginBottom: 2,
						}}
					>
						<FlatList
							style={{

							}}
						 	data={null}
						 	renderItem={null}
						/>
					</View>
				</View>

				<View
					nativeID="lower-panel"
					style={{
						width: '100%',
						flex: 3,
						backgroundColor: globalColors.grassGreen,
						opacity: 0.4,
						borderTopWidth: 1,
						borderTopColor: globalColors.jadeGreen,
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<View
						nativeID="music-info-viewer"
						style={{
							flex: 2,
							alignContent: 'center',
							justifyContent: 'center',
							marginLeft: 3,
							backgroundColor: globalColors.boneWhite,
							height: '70%',
							borderRadius: 10,
						}}
					>
					</View>

					<View
						nativeID="play-button"
						style={{
							flex: 1,
							alignContent: 'center',
							justifyContent: 'center',
							marginLeft: 9,
							marginRight: 9,
						}}
					>
						<TouchableOpacity
							style={{
								width: 69,
								height: 69,
								backgroundColor: globalColors.jadeGreen,
								borderRadius: 1000,
								alignContent: 'center',
							}}
						>
							<Image
								source={require("../assets/icons/play_1.png")}
								style={{
									width: 69,
									height: 69,
									backgroundColor: globalColors.jadeGreen,
									borderRadius: 1000,
								}}
							/>
						</TouchableOpacity>
					</View>

					<View
						nativeID="volume-modifier"
						style={{
							flex: 1,
						}}
					>
						{/*renderMusicVolumeControlBar(60,3,60,10)*/}
					</View>
				</View>
			</ImageBackground>
		</SafeAreaView>
	)
};

export default SoundRelaxation;