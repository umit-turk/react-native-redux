import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import {useSelector} from 'react-redux';
import {colors, fonts} from '../../constants';

export default function Header({title}) {
  const isDarkMode = useSelector(state => state.system.isDarkMode);

  const backgroundColor = isDarkMode
    ? colors.dark.primary[1]
    : colors.light.primary[1];
  return (
    <SafeAreaView //burası android için çok önemli!!!
      style={
        Platform.OS === 'ios'
          ? {backgroundColor}
          : {backgroundColor, paddingTop: StatusBar.currentHeight}
      }>
      <StatusBar backgroundColor={backgroundColor} barStyle="light-content" />
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {marginHorizontal: 20},
  text: {
    fontSize: fonts.f20,
    fontWeight: 'bold',
    color: colors.white[100],
  },
});
