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
import { playList } from "./SoundRelaxation";

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
   const [playListQueue, setPlayListQueue] = React.useState(playList);
   return (
      <SafeAreaView
         nativeID="relaxation-total-detail"
         style={{
            width: '100%',
            height: '90%',
            alignItems: 'center',
            justifyContent: 'center',
         }}
      >
         
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