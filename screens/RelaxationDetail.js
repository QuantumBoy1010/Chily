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
	Modal,
	Animated,
	Transition,
	Easing,
} from 'react-native';
import 'core-js/features/array/at';
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Swipeable, GestureHandlerRootView } from 'react-native-gesture-handler';

import SoundButton from "../components/SoundButton";
import { globalColors, globalFontSizes, screenDimensions } from "../properties/themes";
import {
	globalComponentPaddings,
	globalComponentMargins,
	globalComponentSizes,
} from "../properties/designs";
import PlayListButton from "../components/PlayListButton";
import PlayListData, { playList } from "../data/PlayListData";
import { playlistBarFloatingState, setPlaylistBarFloatingState } from "./SoundRelaxation";

import MusicData, {relaxationThemes} from "../data/MusicData";
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


const RelaxationDetail = () => {
	const navigator = useNavigation();

	const [playlistBarFloatingState, setPlaylistBarFloatingState] = React.useState(playlistBarFloatingState);

	return (
		<SafeAreaView
			nativeID="relaxation-total-detail"
			style={{
				width: '100%',
				height: '100%',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<ImageBackground
				source={require("../assets/images/relaxation_3.png")}
				style={{
					width: '100%',
					height: '100%',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<View
					style={{
						width: '100%',
						height: '93%',
						alignSelf: 'center',
						alignItems: 'center',
						justifyContent: 'center',
						flexDirection: 'column',
						borderWidth: 1,
						borderRadius: 30,
						backgroundColor: globalColors.charcoalBlack,
						opacity: 0.86,
					}}
				>
					<Animated.View
						nativeID="playlist-bar-viewer"
						ref={(playlistBarViewer) => {
						}}
						style={[
							{
								flex: 1,
								height: '100%',
								width: '100%',
								marginBottom: 4,
								alignItems: 'center',
								justifyContent: 'center',
							},
						]}
					>
						<TouchableOpacity
							nativeID="playlist-bar"
							style={{
								height: '100%',
								width: '100%',
								backgroundColor: globalColors.black,
								alignItems: 'center',
								alignSelf: 'center',
								justifyContent: 'center',
								borderColor: globalColors.lightGray1,
								borderRadius: 1000,
							}}
							onPress={(playlistBarFloatingState) => {
								setPlaylistBarFloatingState((playlistBarFloatingState + 1) % 2);
								navigator.goBack();
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

					<View
						nativeID="music-detailed-swipeable-list"
						style={{
							flex: 12,
							width: '100%',
							borderBottomLeftRadius: 25,
							borderBottomRightRadius: 25,
						}}
					>
						<FlatList
							style={{
								height: '100%',
								width: '90%',
							}}
							data={playList}
							keyExtractor={item => playList.indexOf(item)}
							renderItem={(item) => {
								<Swipeable>
									<Text></Text>
								</Swipeable>;
							}}
						/>
					</View>
				</View>
			</ImageBackground>
		</SafeAreaView>
	);
};

export default RelaxationDetail;


/* 

<SharedElement
            nativeID="sound-relaxation-to-relaxation-detail-transition"
            id='1'
         >
            <TouchableOpacity
               nativeID="playlist-bar-viewer"
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
                  opacity: 0.6,
                  borderRadius: 25,
                  marginBottom: 2,
               }}
               onPress={() => touchablePlaylistBarHandle()}
            >
               <FlatList
                  style={{
                     height: '100%',
                     width: '100%',
                     borderRadius: 25,
                  }}
                  horizontal={true}
                  data={playListQueue}
                  keyExtractor={item => playListQueue.indexOf(item)}
                  renderItem={(item) => {
                     <PlayListButton
                        soundSource={item}
                     />;
                  }}
               />
            </TouchableOpacity>
         </SharedElement>

RelaxationDetail.sharedElements = route => {
   const { element } = route.params;
   return [
      {
         id: '0',
         animation: 'move',
         resize: 'clip'
      }
   ];
};

*/