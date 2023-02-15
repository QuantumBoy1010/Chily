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

import SoundButton from "../components/SoundButton";
import { globalColors, globalFontSizes, screenDimensions } from "../properties/themes";
import {
   globalComponentPaddings,
   globalComponentMargins,
   globalComponentSizes,
} from "../properties/designs";
import MusicData, { relaxationThemes, Beach, Rain } from "./MusicData";
import MusicThemes from "./MusicThemeTypes";
import musicThemeTypes from "./MusicThemeTypes";
import CategoryPanel from "../navigations/MusicCategoryNavigationHandler";
import BeachThemeView from "../navigations/BeachThemeView";
import RainThemeView from "../navigations/RainThemeView";
import ForestThemeView from "../navigations/ForestThemeView";
import MelodyThemeView from "../navigations/MelodyThemeView";
import UnderwaterThemeView from "../navigations/UnderwaterThemeView";
import OceanThemeView from "../navigations/OceanThemeView";
import WaterfallThemeView from "../navigations/WaterfallThemeView";

const PlayList = () => {
   const playListQueue = React.useState([]);
   return (
      <View>

      </View>
   );
};

export default PlayList;