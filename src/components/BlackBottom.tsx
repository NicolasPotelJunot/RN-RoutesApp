import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from 'react-native';
interface Props {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

export const BlackBottom = ({title, onPress, style = {}}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...(style as any), ...styles.blackButton}}
      activeOpacity={0.9}>
      <Text style={styles.bottomText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bottomText: {
    fontSize: 18,
    color: 'white',
  },
  blackButton: {
    height: 45,
    width: 200,
    backgroundColor: 'black',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.27,
    shadowRadius: 13.97,

    elevation: 6,
  },
});
