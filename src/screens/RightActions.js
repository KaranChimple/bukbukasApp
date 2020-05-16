import React from 'react';
import {Animated, TouchableOpacity, StyleSheet} from 'react-native';

export const RightActions = ({dragX, onPress}) => {
  const trans = dragX.interpolate({
    inputRange: [-120, 0],
    outputRange: [0, -60],
  });
  return (
    <Animated.View
      style={[
        styles.rightActionsWrapper,
        {
          transform: [{translateX: trans}],
        },
      ]}>
      <TouchableOpacity
        hitSlop={{
          left: 15,
          right: 15,
          top: 20,
          bottom: 20,
        }}
        onPress={onPress}>
        <Animated.Text style={styles.actionText}>Remove Event</Animated.Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  rightActionsWrapper: {
    width: '45%',
    height: '40%',
    borderTopLeftRadius: 32,
    borderBottomLeftRadius: 32,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  actionText: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'bold',
    letterSpacing: 0,
    color: '#fff',
    paddingHorizontal: 20,
  },
});
