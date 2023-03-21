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
import 'core-js/features/array/at';
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'; 
import PlayListElementInfo from "./PlayListElementInfoTypes";

export const [playlist, setPlaylist] = React.useState([{}]);

const PlayListData = () => {
};

export default PlayListData;