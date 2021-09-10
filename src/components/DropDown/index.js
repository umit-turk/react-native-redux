import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {colors, fonts} from '../../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

export default function Dropdown({
  items,
  title,
  value,
  style = {},
  onValueChange,
  placeholder = 'Seçiniz',
  onDonePress = () => {null},
}) {
  const isDarkMode = useSelector(state => state.system.isDarkMode)
  const doneText = 'Tamam';
  const iconStyle = isDarkMode ? {} : {};

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
            color: isDarkMode ? colors.cFFFFFF:colors.light.primary[1],
          },
          inputAndroid: {
            fontSize: fonts.f13,
            fontWeight: 'bold',
            color: isDarkMode ? colors.cf5f5fb:colors.light.primary[1],
            top: 0,
          },
        }}
        onDonePress={() => onDonePress()}
        Icon={() => {
          return (
            <Icon
              name="expand-more"
              size={20}
              color={isDarkMode ? colors.dark.white[100]:colors.light.primary[1]}
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
    borderColor: "gray",
    borderRadius: 10,
    padding: 10,
  },
  title: {
      color: colors.white[100]
  },
  picker: {},
  icon: {},
});
