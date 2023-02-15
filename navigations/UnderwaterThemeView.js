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
import { useNavigation } from '@react-navigation/native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import SoundButton from "../components/SoundButton";
import { globalColors, screenDimensions } from "../properties/themes";
import {
   globalComponentPaddings,
   globalComponentMargins,
   globalComponentSizes,
   globalBorderRadiuses,
   globalComponentBorderWidth,
   globalComponentBorderWidths,
} from "../properties/designs";
import { Underwater } from "../data/MusicData";
import AppProperties, { soundButtonBorderWidth } from "../properties/app_properties";

const UnderwaterThemeView = () => {
   const themeColor = globalColors.underwaterBlue;
   const soundButtonSize = globalComponentSizes.standardSoundButtonSize;
   const [currentPlayingFlag, setCurrentPlayingFlag] = React.useState(0);
   const [currentSoundSlide, setCurrentSoundSlide] = React.useState(0);
   const [sound, setSound] = React.useState(new Audio.Sound);

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
            data={Underwater}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
               return (
                  <View
                     style={{
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
                     }}
                  >
                     <TouchableOpacity
                        style={{
                           width: soundButtonSize,
                           height: soundButtonSize,
                           backgroundColor: globalColors.seashellWhite,
                           borderColor: globalColors.limeGreen,
                           borderWidth: soundButtonBorderWidth,
                           opacity: 0.6,
                           borderRadius: globalBorderRadiuses.bigBorderRadius,
                        }}
                        onPress={() => {
                           const soundURL = item.source;
                           setCurrentPlayingFlag(item.id);
                           setCurrentSoundSlide(Underwater.themeID);
                           if (item.id === currentPlayingFlag) {
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
   );
};

export default UnderwaterThemeView;