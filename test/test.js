import {
	View,
	Text, FlatList, TouchableOpacity,
} from "react-native";
import 'core-js/features/array/at';

import {relaxationThemes} from "../data/MusicData";
import {globalComponentMargins} from "../properties/designs";
import {globalColors} from "../properties/themes";
import AppIntroSlider from "react-native-app-intro-slider";
import React from "react";

const Test = () => {
	function getElementArrayByAttribute()
	{

	}
	console.log(relaxationThemes.at(0).theme.length)
	/*return (
		<AppIntroSlider
			style={{
				alignSelf: 'center',
				width: '90%',
				height: '90%',
			}}
			data={musicData}
			keyExtractor={theme => theme.themeID}
			renderItem={({theme}) => {
				//const themeID = musicData.filter(object => object.theme === theme)[0].themeID;
				console.log(musicData.filter(object => object.theme === theme));
				return (
					<View
						style={{
							width: '100%',
							height: '100%',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<FlatList
							style={{
								alignSelf: 'center',
							}}
							numColumns={3}
							data={musicData.filter(object => object.theme === theme)}
							keyExtractor={item => item.id}
							renderItem={({ item }) => {
								return (
									<View
										style={{
											width: 80,
											height: 80,
											alignSelf: 'center',
											justifyContent: 'center',
											alignItems: 'center',
											marginLeft: globalComponentMargins.smallMargin,
											marginRight: globalComponentMargins.smallMargin,
											marginBottom: 40,
											opacity: 0.6,
										}}
									>
										<TouchableOpacity
											style={{
												width: 80,
												height: 80,
												backgroundColor: globalColors.seashellWhite,
												borderColor: globalColors.limeGreen,
												borderWidth: 1,
												opacity: 0.6,
												borderRadius: 10,
											}}
											onPress={() => {
												const soundURL = item.source;
												setCurrentPlayingFlag(item.id);
												setCurrentSoundSlide(theme.themeID);
												if(item.id ===  currentPlayingFlag)
												{
													playSound(soundURL).then(r => null);
												}
											}}
										>
										</TouchableOpacity>
									</View>
								);
							}}
						/>
					</View>
				)
			}}
			renderDoneButton={null}
			renderNextButton={null}
		/>
	)*/
}

export default Test;