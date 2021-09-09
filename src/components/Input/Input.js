import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, fonts} from '../../constants';

export default function Input({
  onChangeText,
  isHidden,
  icon,
  value = '',
  placeHolder = '',
  placeHolderTextColor,
  style,
  color,
  ...props
}) {
  const [showPass, setShowPass] = useState(false);

  return (
    <View style={[styles.container, {...style}]}>
      <Icon name={icon} size={26} color={color} style={{marginRight: 15}} />
      <TextInput
        onChangeText={onChangeText}
        value={value}
        placeholder={placeHolder}
        placeholderTextColor={colors.white[50]}
        secureTextEntry={isHidden ? !showPass : false}
        style={[styles.text, {color}]}
        {...props}
      />
      {isHidden && (
        <IconCommunity
          name={showPass ? 'eye' : 'eye-off'}
          onPress={() => setShowPass(pass => !pass)}
          color={color}
          style={styles.icon}
          size={26}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {marginRight: 15},
  container: {
    flexDirection: 'row',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#97a1be',
  },
  text: {
    marginTop: 3,
    fontSize: fonts.f13,
    letterSpacing: 1,
    fontWeight: '600',
    width: '80%',
    color: colors.cFFFFFF
  },
});
