import * as FileSystem from 'expo-file-system';
import React, { useCallback, useRef, useEffect, useState } from 'react';
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
	SectionList,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import {relaxationThemes} from "../data/MusicData";
import {globalComponentMargins} from "../properties/designs";
import {globalColors} from "../properties/themes";
import data from "./data.json";


const Test = () => {
	/*const fetchedData = require("../test/data.json");
	console.log("Initial data.json content: " + JSON.stringify(require("./data.json")));

	const dataToPush = {
		id: "03",
		name: "person_3",
		type: "3"
	};
	FileSystem.writeAsStringAsync(data, JSON.stringify(dataToPush))
		.then(
			fetchedData.push(dataToPush)
		)
		.then(
			console.log("Final data.json content: " + JSON.stringify(require("./data.json")))
		)
		.catch(error => console.log(error));
	*/
	const animatedColor = useRef(new Animated.Value(0)).current;
	var animatedColorInterpolator = animatedColor.interpolate({
		inputRange: [-1, 0, 1],
		outputRange: [globalColors.seaBlue, globalColors.grassGreen, globalColors.goldenYellow],
	});
	React.useEffect(() => {
		Animated.loop(
			Animated.timing(animatedColor, {
				toValue: animatedColorInterpolator,
				duration: 200,
				useNativeDriver: true,
			}),
		).start();	
	}); 

	/*const movingOffset = useRef(new Animated.Value(0)).current;
	const movingOffsetInterpolator = movingOffset.interpolate({
		inputRange: [0, 1],
		outputRange: [-1000, 0],
	});
	React.useEffect(() => {
		Animated.loop(
			Animated.timing(movingOffset, {
				toValue: movingOffsetInterpolator,
				duration: 1000,
				useNativeDriver: true,
			})
		).start();
	});*/
	const AnimatedButton = Animated.createAnimatedComponent(TouchableOpacity);

	return(
		<SafeAreaView
			style={{
				width: '100%',
				height: '100%',
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: globalColors.lightPink,
			}}
		>
			<Animated.View
				style={[
					{
						width: 200,
						height: 60,
						alignItems: 'center',
						justifyContent: 'center',
						borderRadius: 25,
						borderColor: globalColors.black,
						backgroundColor: animatedColor,
					}
				]}
			>
				<AnimatedButton
					style={[
						{
							width: 200,
							height: 60,
							borderWidth: 1,
							borderRadius: 25,
							alignItems: 'center',
							justifyContent: 'center',
						}
					]}
				>
					<Text>Meditation</Text>
				</AnimatedButton>
			</Animated.View>
		</SafeAreaView>
	)
};

export default Test;