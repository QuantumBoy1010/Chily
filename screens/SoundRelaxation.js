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
import AppIntroSlider from 'react-native-app-intro-slider';

import SoundButton from "../components/SoundButton";
import { globalColors, screenDimensions } from "../properties/themes";
import {
   globalComponentPaddings,
   globalComponentMargins,
   globalComponentSizes,
} from "../properties/designs"
import relaxationThemes, {Beach, Rain} from "../data/MusicData";
import MusicThemes from "../data/MusicThemeTypes";

const SoundRelaxation = () => {
   const deviceWidth = screenDimensions.windowWidth;
   const deviceHeight = screenDimensions.windowHeight;

   const [sound, setSound] = React.useState(new Audio.Sound);

   async function playSound (soundSource) {
      console.log("Loading Sound");
      const { sound } = await Audio.Sound.createAsync(soundSource); //"../assets/audios/counting_star.mp3"
      setSound(sound);

      console.log('Playing Sound');
      await sound.playAsync();
   }

   React.useEffect(() => {
      return sound
         ? () => {
            console.log('Unloading Sound');
            sound.unloadAsync().then(r => null);
         }
         : undefined;
   }, [sound]);

   const musicData = relaxationThemes;
   const [currentPlayingFlag, setCurrentPlayingFlag] = React.useState(0);
   const [currentSoundSlide, setCurrentSoundSlide] = React.useState(0);

   function renderMusicList(theme)
   {
      console.log(relaxationThemes.length);
      return (
         <View
            style={{
               width: '100%',
               height: '100%',
            }}
         >
            <FlatList
               numColumns={3}
               data={musicData.theme}
               keyExtractor={item => item.id}
               renderItem={({ item }) => {
                  return (
                     <View
                        style={{
                           width: 80,
                           height: 80,
                           alignSelf: 'center',
                           justifyContent: 'center',
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
   }

   return (
      <SafeAreaView
         nativeID="total-device-screen-view"
         style={{
            width: '100%',
            height: '100%',
            backgroundColor: globalColors.boneWhite,
            flexDirection: 'column'
         }}
      >
         <ImageBackground
            nativeID="app-wallpaper"
            source={require("../assets/images/beach.png")}
            style={{
               width: '100%',
               height: '100%',
            }}
         >
            <View
               nativeID="upper-panel"
               style={{
                  width: '100%',
                  flex: 2,
                  backgroundColor: globalColors.jadeGreen,
                  opacity: 0.7,
                  borderBottomWidth: 2,
                  borderBottomColor: globalColors.grassGreen,
               }}
            >

            </View>

            <View
               nativeID="main-content"
               style={{
                  width: '100%',
                  flex: 15,
                  marginTop: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
               }}
            >
               <View
                  nativeID="playlist-viewer"
                  style={{
                     flex: 1,
                     height: '100%',
                     width: '94%',
                     alignItems: 'center',
                     alignSelf: 'center',
                     justifyContent: 'center',
                     backgroundColor: globalColors.white,
                     borderWidth: 1,
                     opacity: 0.6,
                     borderRadius: 10,
                  }}
               >

               </View>
               <View
                  nativeID="music-viewer"
                  style={{
                     flex: 10,
                     width: '94%',
                     marginTop: 7,
                     marginBottom: 7,
                     alignItems: 'center',
                     justifyContent: 'center',
                     backgroundColor: globalColors.skyBlue,
                     opacity: 0.8,
                     borderRadius: 14,
                     flexDirection: (deviceWidth > 500) ? 'row' : 'column',
                  }}
               >
                  <View
                     nativeID="category-viewer"
                     style={{
                        flex: 1,
                        marginTop: 4,
                        marginBottom: 2,
                        marginLeft: 2,
                        marginRight: 2,
                        borderWidth: 1,
                        borderColor: globalColors.white,
                        borderRadius: 10,
                        width: '96%',
                     }}
                  >

                  </View>
                  <View
                     nativeID="relaxation-music-grid"
                     style={{
                        flex: 8,
                        marginTop: 2,
                        marginBottom: 2,
                        marginLeft: 2,
                        marginRight: 2,
                        borderWidth: 1,
                        borderColor: globalColors.white,
                        borderRadius: 10,
                        width: '99%',
                     }}
                  >
                     <AppIntroSlider
                        style={{
                           alignSelf: 'center',
                           width: '90%',
                           height: '90%',
                        }}
                        data={relaxationThemes}
                        keyExtractor={theme => theme.themeID}
                        renderItem={({ theme }) => {
                           renderMusicList(theme);
                        }}
                     />
                  </View>
               </View>
            </View>

            <View
               nativeID="lower-panel"
               style={{
                  width: '100%',
                  flex: 3,
                  backgroundColor: globalColors.grassGreen,
                  opacity: 0.81,
                  borderTopWidth: 1,
                  borderTopColor: globalColors.jadeGreen,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
               }}
            >
               <View
                  nativeID="music-info-viewer"
                  style={{
                     flex: 2,
                     alignContent: 'center',
                     justifyContent: 'center',
                     marginLeft: 3,
                     backgroundColor: globalColors.boneWhite,
                     height: '70%',
                     borderRadius: 10,
                  }}
               >

               </View>

               <View
                  nativeID="play-button"
                  style={{
                     flex: 1,
                     alignContent: 'center',
                     justifyContent: 'center',
                     marginLeft: 9,
                     marginRight: 9,
                  }}
               >
                  <TouchableOpacity
                     style={{
                        width: 69,
                        height: 69,
                        backgroundColor: globalColors.jadeGreen,
                        borderRadius: 1000,
                        alignContent: 'center',
                     }}
                  >
                     <Image
                        source={require("../assets/icons/play_1.png")}
                        style={{
                           width: 69,
                           height: 69,
                           backgroundColor: globalColors.jadeGreen,
                           borderRadius: 1000,
                        }}
                     />
                  </TouchableOpacity>
               </View>

               <View
                  nativeID="volume-modifier"
                  style={{
                     flex: 1,
                  }}
               >

               </View>
            </View>
         </ImageBackground>
      </SafeAreaView>
   )
};

export default SoundRelaxation;