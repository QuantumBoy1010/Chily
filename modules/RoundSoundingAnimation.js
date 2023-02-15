import React, { PureComponent, useEffect, useCallback, useState } from 'react';
import { 
   StyleSheet, 
   View, 
   TouchableWithoutFeedback, 
   Animated, 
   Easing, 
   Platform, 
   Text 
} from 'react-native';


const RoundSoundingAnimator = (props = {}) => {
   const currentVolume = props?.currentVolume ?? 0;

   const maxVolume = 50;

   const animationRef = React.useRef(new Animated.Value(0)).current;

   const startAnimations = useCallback(() => {
      Animated.timing(animationRef, {
         toValue: (currentVolume / maxVolume),
         useNativeDriver: true,
         duration: 500
      }).start();
   }, [animationRef, currentVolume]);

   useEffect(() => {
      startAnimations();
   }, [startAnimations]);

   const polAnim = animationRef.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 2],
      extrapolate: 'clamp'
   });

   return (
      <Animated.View 
         style={[styles.ripler, {
            position: 'absolute',
            height: 60,
            width: 60,
            borderRadius: 120,

            transform: [{
               scale: polAnim
            }]
         }]} 
      >
      </Animated.View>
   );
};
const data = [1, 6, 39, 40, 50, 22, 7, 15, 12, 1, 6, 39, 40, 50, 22, 7, 15, 18, 1, 6, 39, 40, 50, 22, 7, 15, 12, 1, 6, 39, 40, 50, 22, 7, 15, 12, 1, 6, 39, 40, 50, 22, 7, 15, 12, 1, 6, 39, 40, 50, 22, 7, 15, 12];

const RoundSoundingAnimation = () => {

   const [currentTime, setTime] = useState(0);
   const [currIndex, setIndex] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         const newIndex = currIndex + 1;
         setTime(data[currIndex]);
         setIndex(newIndex);
      }, 500);
      return () => clearInterval(interval);
   }, [currIndex]);

   return (
      <View 
         style={styles.pageContainer}
      >
         <View 
            style={{ 
               height: 100, 
               width: 100 
            }} 
         >
            <RoundSoundingAnimator 
               currentVolume={currentTime} 
            />
            <View style={{
               height: 60, width: 60, borderRadius: 60,
               alignItems: 'center',
               justifyContent: 'center',
               backgroundColor: 'rgba(125,244,102,0.9)',
               zIndex: 3
            }} >
               <Text>Messi</Text>
            </View>
         </View>
      </View>
   );

};


const styles = StyleSheet.create({
   pageContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
   },
   ripler: {
      backgroundColor: 'rgba(125,244,102,0.3)',
      zIndex: 2
   },
   contentContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   iconContainer: {
      margin: 16,
      alignItems: 'center',
      justifyContent: 'center',
   },
});


export default RoundSoundingAnimation;