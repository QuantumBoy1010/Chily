import { Audio } from 'expo-av';
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
import 'core-js/features/array/at';
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import {relaxationThemes} from "../data/MusicData";
import {globalComponentMargins} from "../properties/designs";
import {globalColors} from "../properties/themes";


const Test = () => {
	// fadeAnim will be used as the value for opacity. Initial Value: 0
	/*const fadeAnim = useRef(new Animated.Value(0)).current;

	const fadeIn = () => {
		// Will change fadeAnim value to 1 in 5 seconds
		Animated.timing(fadeAnim, {
			toValue: 1,
			duration: 5000,
			useNativeDriver: true,
		}).start();
	};

	const fadeOut = () => {
		// Will change fadeAnim value to 0 in 3 seconds
		Animated.timing(fadeAnim, {
			toValue: 0,
			duration: 3000,
			useNativeDriver: true,
		}).start();
	};*/


	const floatAnimator = useRef(new Animated.Value(0)).current;
	const floatingPosition = useRef(new Animated.Value(0)).current;

	const floatUpward = () => {
		Animated.timing(floatAnimator, {
			toValue: floatAnimator.interpolate({
				inputRange: [0, 1],
				outputRange: [0, -200],
			}),
			duration: 1000,
			useNativeDriver: true,
		}).start();
	}

	/*const float = useEffect(() => {
			Animated.timing(floatingPosition, {
				toValue: -200,
				duration: 1000,
				useNativeDriver: true,
			}).start();
	}, []);*/


	return (
		<SafeAreaView 
			style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column',
			}}
		>
			<Animated.View
				nativeID="own"
				style={{
					borderWidth: 1,
					width: '90%',
					height: '50%',
					borderRadius: 23,
					alignSelf: 'center',
					alignItems: 'center',
					justifyContent: 'center',
					marginBottom: 2,
					backgroundColor: '#696969',
					transform: [{
						translateY: floatingPosition,
					}]
				}}
			>
				<TouchableOpacity
					style={[
					{
						width: 200,
						height: 50,
						borderWidth: 1,
						borderRadius: 50,
						alignItems: 'center',
						justifyContent: 'center',
						backgroundColor: '#969696',
						position: 'absolute',
					},
					]}
					onPress={() => {
						Animated.timing(floatingPosition, {
							toValue: -200,
							duration: 1000,
							useNativeDriver: true,
						}).start();
					}}
				>
					<Text
						style={{
						}}
					>Coco</Text>
				</TouchableOpacity>
			</Animated.View>
			<TouchableOpacity
				style={[
					{
						width: 200,
						height: 50,
						borderWidth: 1,
						borderRadius: 50,
						alignItems: 'center',
						justifyContent: 'center',
						backgroundColor: '#969696',
					},
				]}
				onPress={() => {
					Animated.timing(floatingPosition, {
						toValue: -200,
						duration: 1000,
						useNativeDriver: true,
					}).start();
				}}
			>
				<Text>Coco</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	fadingContainer: {
		padding: 20,
		backgroundColor: 'powderblue',
	},
	fadingText: {
		fontSize: 28,
	},
});

export default Test;

/* 


			<Animated.View
				style={[
					styles.fadingContainer,
					{
						// Bind opacity to animated value
						opacity: fadeAnim,
						flex: 1,
					},
				]}
			>
				<Text 
					style={styles.fadingText}
				>Fading View!</Text>
			</Animated.View>
			<View
				style={{
					flexBasis: 100,
					justifyContent: 'space-evenly',
					marginVertical: 16,
					flex: 1,
				}}
			>
				<Button
					title="Fade In View"
					onPress={fadeIn}
				/>
				<Button
					title="Fade Out View"
					onPress={fadeOut}
				/>
			</View>

*/