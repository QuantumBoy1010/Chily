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
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from "./screens/Home";
import SoundRelaxation from "./screens/SoundRelaxation";
import RelaxationDetail from "./screens/RelaxationDetail";

import Test from "./test/test.js";

const Stack = createStackNavigator();
export default function App() {
	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: '#ffffff',
				justifyContent: 'center',
			}}
		>
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerShown: false
					}}
					initialRouteName={ "Test" }
				>
					<Stack.Screen
						name="Home"
						component={Home}
						option={{ title: "Home" }}
					/>
					<Stack.Screen
						name="SoundRelaxation"
						component={SoundRelaxation}
						option={{ title: "SoundRelaxation" }}
					/>
					<Stack.Screen
						name="RelaxationDetail"
						component={RelaxationDetail}
						option={{ title: "RelaxationDetail" }}
					/>

					<Stack.Screen
						name="Test"
						component={Test}
						option={{ title: "Test" }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
});
