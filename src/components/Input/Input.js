import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Input({
  onChangeText,
  isHidden,
  icon,
  value = '',
  placeHolder = '',
  placeHolderTextColor,
  style,
  color,
}) {
  const [showPass, setShowPass] = useState(false);

  return (
    <View
      style={{
        flexDirection: 'row',
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#97a1be',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Icon name={icon} size={26} color={color} style={{marginRight: 15}} />
      <TextInput
        onChangeText={onChangeText}
        value={value}
        placeholder={placeHolder}
        placeholderTextColor={placeHolderTextColor}
        secureTextEntry={isHidden ? !showPass : false}
        style={[
          {
            marginTop: 3,
            fontSize: 13,
            letterSpacing: 1,
            fontWeight: '600',
          },
          {color},
        ]}
      />
    </View>
  );
}
