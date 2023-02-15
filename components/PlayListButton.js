import {
   Audio,
   Video,
} from 'expo-av';
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

import { globalColors } from "../properties/themes";

const PlayListButton = () => {
   const [soundSource, setSoundSource] = React.useState();
   const [iconSource, setIconSource] = React.useState("");
   const [pressAction, setPressAction] = React.useState({});

   return (
      <View
         style={{
            width: 40,
            height: 40,
            borderRadius: 100,
            justifyContent: 'center',
            alignContent: 'center',
            borderColor: globalColors.alabasterWhite,
            borderWidth: 1,
         }}
      >
         <TouchableOpacity
            style={{
               width: 40,
               height: 40,
               borderRadius: 100,
               justifyContent: 'center',
               alignContent: 'center',
               opacity: 0.9,
            }}
            onPress={() => pressAction}
         >
            <Image
               source={iconSource}
            />
         </TouchableOpacity>
      </View>
   );
};

export default PlayListButton;