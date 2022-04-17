import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './Button.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Button = ({title, iconName, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name={iconName} size={24} color="white" />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
