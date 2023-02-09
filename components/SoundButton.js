import {
   Audio,
   Video,
} from 'expo-av'
import React from 'react';
import {
   SafeAreaView,
   StyleSheet,
   Text,
   View,
   Image,
   TouchableOpacity,
   Button,
   FlatList,
   Modal
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {globalColors} from "../properties/themes";

const SoundButton = () => {
   const [width,setWidth] = React.useState(0);
   const [height,setHeight] = React.useState(0);
   const [borderRadius,setBorderRadius] = React.useState(0);
   const [iconSource,setIconSource] = React.useState("");
   const [mediaSource,setMediaSource] = React.useState("");
   const [pressAction,setPressAction] = React.useState(null);

   return (
      <View
         style={{
            width: width,
            height: height,
            borderRadius: borderRadius,
            justifyContent: 'center',
            alignContent: 'center',
            borderColor: globalColors.alabasterWhite,
         }}
      >
         <TouchableOpacity
            style={{
               width: width,
               height: height,
               borderRadius: borderRadius,
               justifyContent: 'center',
               alignContent: 'center',
            }}
            onPress={(mediaSource) => {
               pressAction;
            }}
         >
            <Image
               source={iconSource}
            />
         </TouchableOpacity>
      </View>
   )
}

export default SoundButton;