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
} from 'react-native';
import 'core-js/features/array/at';
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AppIntroSlider from 'react-native-app-intro-slider';
import { NavigationContainer } from '@react-navigation/native';

import SoundButton from "../components/SoundButton";
import { globalColors, screenDimensions } from "../properties/themes";
import {
   globalComponentPaddings,
   globalComponentMargins,
   globalComponentSizes,
} from "../properties/designs";
import MusicData, { relaxationThemes, Beach, Rain } from "../data/MusicData";


const CategoryTab = createMaterialTopTabNavigator();

function CategoryTabBar ({ state, descriptors, navigation, position }) 
{
   return (
      <View 
         style={{ 
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'center',
         }}
      >
         {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
               options.tabBarLabel !== undefined
                  ? options.tabBarLabel
                  : options.title !== undefined
                     ? options.title
                     : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
               const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                  canPreventDefault: true,
               });

               if (!isFocused && !event.defaultPrevented) {
                  // The `merge: true` option makes sure that the params inside the tab screen are preserved
                  navigation.navigate({ name: route.name, merge: true });
               }
            };

            const onLongPress = () => {
               navigation.emit({
                  type: 'tabLongPress',
                  target: route.key,
               });
            };

            const inputRange = state.routes.map((_, i) => i);
            const opacity = position.interpolate({
               inputRange,
               outputRange: inputRange.map(i => (i === index ? 1 : 0)),
            });

            return (
               <TouchableOpacity
                  accessibilityRole="button"
                  accessibilityState={isFocused ? { selected: true } : {}}
                  accessibilityLabel={options.tabBarAccessibilityLabel}
                  testID={options.tabBarTestID}
                  onPress={onPress}
                  onLongPress={onLongPress}
                  style={{ 
                     flex: 1 
                  }}
                  key={index}
               >
                  <Animated.Text 
                     style={{ opacity }}
                  >
                     {label}
                  </Animated.Text>
               </TouchableOpacity>
            );
         })}
      </View>
   );
};