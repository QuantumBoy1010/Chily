import { Audio } from 'expo-av';
import React, {useCallback, useRef, useEffect, useState} from 'react';
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
	Modal,
	Animated,
	Transition,
	Easing,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'core-js/features/array/at';
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'; 
/*import {
	SharedElement,
	SharedElementTransition,
	nodeFromRef,
	createSharedElementStackNavigator,
} from 'react-native-shared-element';
import { SpectrumVisualizer, SpectrumVisualizerTheme } from 'react-audio-visualizers'; */


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


const CategoryTab = createMaterialTopTabNavigator();

const SoundRelaxation = () => {
	const [playList, setPlayList] = React.useState([]);
	const deviceWidth = screenDimensions.windowWidth;
	const deviceHeight = screenDimensions.windowHeight;

	const [sound, setSound] = React.useState(new Audio.Sound);

	async function playSound (soundSource) {
		console.log("Loading Sound");
		const { sound } = await Audio.Sound.createAsync(soundSource);
		setSound(sound);
		playList.push(sound);

		console.log('Playing Sound');
		await sound.playAsync();
	};

	React.useEffect(() => {
		return sound
			? () => {
				sound.unloadAsync().then(r => null);
			}
			: undefined;
	}, [sound]);

	//Component animation params
	const playlistBarFloatingPositionY = useRef(new Animated.Value(0)).current;
	const playlistBarFloatingPositionX = useRef(new Animated.Value(0)).current;
	const playlistBarWidthScaleFactor = useRef(new Animated.Value(0.9)).current;

	//Component state params
	const [playlistBarFloatingState,setPlaylistBarFloatingState] = React.useState(0);


	//Designed themes
	const auraColor = globalColors.grassGreen;


	//Rendering functions

	const floatUpward = () => {
		Animated.timing(globalAnimator,{
			toValue: 0,
			duration: 3000,
			useNativeDriver: false,
		}).start();
	};

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
						borderBottomColor: auraColor,
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
							borderColor: globalColors.grassGreen,
							borderWidth: 1,
							flexDirection: (deviceWidth > 500) ? 'row' : 'column',
						}}
					>
						<View
							nativeID="app-title"
							style={{
								flex: 1,
								marginTop: 5,
								marginBottom: 10,
								marginLeft: 3,
								marginRight: 3,
								borderWidth: 1,
								borderColor: globalColors.white,
								borderRadius: 24,
								width: '96%',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<Image
								source={require("../assets/logo/Chily_2.png")}
								style={{
									width: 200,
									height: 80,
									marginTop: 10,
								}}
							/>
						</View>
						<View
							nativeID="relaxation-music-grid"
							style={{
								flex: 7,
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
					<Animated.View
						style={[
							{
								flex: 1,
								height: '100%',
								width: '100%',
								marginBottom: 4,
								alignItems: 'center',
								justifyContent: 'center',
							},
							{
								transform: [
									{translateY: playlistBarFloatingPositionY},
									{scaleX: playlistBarWidthScaleFactor}
								]
							},
						]}
					>
						<TouchableOpacity
							nativeID="playlist-bar-viewer"
							style={{
								height: '100%',
								width: '96%',
								backgroundColor: globalColors.charcoalBlack,
								alignItems: 'center',
								alignSelf: 'center',
								justifyContent: 'center',
								borderWidth: 1,
								borderColor: globalColors.lightGray1,
								opacity: 0.6,
								borderRadius: 25,
							}}
							onPress={() => {
								if(playlistBarFloatingState % 2 === 0)
								{
									Animated.timing(playlistBarFloatingPositionY, {
										toValue: -565,
										duration: 1000,
										useNativeDriver: true,
									}).start();
									Animated.timing(playlistBarWidthScaleFactor, {
										toValue: 1.0,
										duration: 1000,
										useNativeDriver: true,
									}).start();
									setPlaylistBarFloatingState((playlistBarFloatingState + 1) % 2);
								}
								else
								{
									Animated.timing(playlistBarFloatingPositionY, {
										toValue: 0,
										duration: 1000,
										useNativeDriver: true,
									}).start();
									Animated.timing(playlistBarWidthScaleFactor, {
										toValue: 0.9,
										duration: 1000,
										useNativeDriver: true,
									}).start();
									setPlaylistBarFloatingState((playlistBarFloatingState + 1) % 2);
								}
							}}
						>
							<FlatList
								style={{
									height: '100%',
									width: '100%',
									borderRadius: 25,
								}}
								horizontal={true}
								data={playList}
								keyExtractor={item => playList.indexOf(item)}
								renderItem={(item) => {
									<PlayListButton
										soundSource={item}
									/>;
								}}
							/>
						</TouchableOpacity>
					</Animated.View>	
				</View>

				<View
					nativeID="lower-panel"
					style={{
						width: '100%',
						flex: 3,
						backgroundColor: globalColors.black,
						opacity: 0.81,
						borderTopWidth: 1,
						borderTopColor: globalColors.jadeGreen,
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<View
						nativeID="media-playlist-info"
						style={{
							flex: 3,
							alignContent: 'center',
							justifyContent: 'center',
							marginLeft: 10,
							backgroundColor: globalColors.white,
							height: '81%',
							borderRadius: 20,
							borderColor: auraColor,
							borderWidth: 1,
						}}
					>
						{/*<SpectrumVisualizer
							audio={sound}
							theme={SpectrumVisualizerTheme.radialSquaredBars}
							colors={['#009688', '#26a69a']}
							iconsColor="#26a69a"
							backgroundColor="white"
							showMainActionIcon
							showLoaderIcon
							highFrequency={8000}
						/>*/}
					</View>

					<View
						nativeID="play-button"
						style={{
							flex: 1,
							alignContent: 'center',
							justifyContent: 'center',
							marginLeft: 10,
							marginRight: 10,
							borderRadius: 100,
						}}
					>
						<TouchableOpacity
							style={{
								width: 69,
								height: 69,
								backgroundColor: globalColors.black,
								borderRadius: 1000,
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<Image
								source={require("../assets/icons/play_1.png")}
								style={{
									width: 69,
									height: 69,
									backgroundColor: globalColors.black,
									borderRadius: 1000,
									alignSelf: 'center',
								}}
							/>
						</TouchableOpacity>
					</View>
				</View>
			</ImageBackground>
		</SafeAreaView>
	)
};

export default SoundRelaxation;