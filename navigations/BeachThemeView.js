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
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import SoundButton from "../components/SoundButton";
import { globalColors, screenDimensions } from "../properties/themes";
import {
   globalComponentPaddings,
   globalComponentMargins,
   globalComponentSizes,
   globalBorderRadiuses,
} from "../properties/designs";
import { Beach } from "../data/MusicData";
import AppProperties, { soundButtonBorderWidth } from "../properties/app_properties";
import PlayListData, { playlist } from "../data/PlayListData";


const BeachThemeView = () => {
   const soundButtonSize = globalComponentSizes.standardSoundButtonSize;
   const [currentPlayingFlag, setCurrentPlayingFlag] = React.useState(0);
   const [currentSoundSlide, setCurrentSoundSlide] = React.useState(0);
   const [sound, setSound] = React.useState(new Audio.Sound);

   //Colors & themes
   const themeColor = globalColors.skyBlue;
   /*const borderColor = useRef(new Animated.Value(0)).current;
   const SUCCESS_COLOR = globalColors.grassGreen;
   const ORIGINAL_COLOR = globalColors.skyBlue;
   React.useEffect(() => {
      Animated.timing(borderColor,{
         toValue: borderColor.interpolate({
            inputRange: [0, 1],
            outputRange: [ORIGINAL_COLOR, SUCCESS_COLOR]
         }),
         duration: 100,
         useNativeDriver: true,
      })
   });*/

   async function playSound (soundSource) {
      console.log("Loading Sound");
      const { sound } = await Audio.Sound.createAsync(soundSource);
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

   return (
      <View
         style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: themeColor,
         }}
      >
         <FlatList
            style={{
               alignSelf: 'center',
               paddingTop: 20,
               backgroundColor: themeColor,
               opacity: 0.9,
            }}
            numColumns={3}
            data={Beach}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
               return (
                  <Animated.View
                     style={[
                        {
                           width: soundButtonSize,
                           height: soundButtonSize,
                           alignSelf: 'center',
                           justifyContent: 'center',
                           alignItems: 'center',
                           marginLeft: globalComponentMargins.smallMargin,
                           marginRight: globalComponentMargins.smallMargin,
                           marginTop: globalComponentMargins.lightMargin,
                           marginBottom: 40,
                           opacity: 0.6,
                           borderRadius: globalBorderRadiuses.bigBorderRadius,
                        },
                        {
                           borderColor: borderColor,
                        }
                     ]}
                  >
                     <TouchableOpacity
                        style={{
                           width: soundButtonSize,
                           height: soundButtonSize,
                           backgroundColor: globalColors.seashellWhite,
                           borderWidth: soundButtonBorderWidth,
                           opacity: 0.6,
                           borderRadius: globalBorderRadiuses.bigBorderRadius,
                        }}
                        onPress={() => {
                           const soundURL = item.source;
                           setCurrentPlayingFlag(item.id);
                           setCurrentSoundSlide(Beach.themeID);
                           if (item.id === currentPlayingFlag) {
                              playlist.push(item)
                                 .then(playSound(soundURL))
                                 .catch(error => console.log(error));
                           }
                        }}
                     >
                     </TouchableOpacity>
                  </Animated.View>
               );
            }}
         />
      </View>
   );
}

export default BeachThemeView;