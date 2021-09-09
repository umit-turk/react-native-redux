import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {colors, fonts} from '../../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Dropdown({
  items,
  title,
  value,
  style = {},
  onValueChange,
  placeholder = 'Seçiniz',
  onDonePress = () => {null},
}) {
  const isDark = false;
  const doneText = 'Tamam';
  const iconStyle = isDark ? {} : {};

  return (
    <View style={styles.dropdown}>
      <RNPickerSelect
        items={items}
        onValueChange={(val) => onValueChange(val)}
        doneText={doneText}
        placeholder={{label: placeholder}}
        value={value}
        style={{
          inputIOS: {
            fontSize: fonts.f13,
            fontWeight: 'bold',
            color: colors.cFFFFFF,
          },
          inputAndroid: {
            fontSize: fonts.f13,
            fontWeight: 'bold',
            color: colors.cFFFFFF,
            top: 0,
          },
        }}
        onDonePress={() => onDonePress()}
        Icon={() => {
          return (
            <Icon
              name="expand-more"
              size={20}
              color={'#fff'}
              style={iconStyle}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    height: Platform.OS === 'ios' ? 42 : 38,
    borderWidth: 1,
    borderColor: colors.white[100],
    borderRadius: 10,
    padding: 10,
  },
  title: {
      color: colors.white[100]
  },
  picker: {},
  icon: {},
});
