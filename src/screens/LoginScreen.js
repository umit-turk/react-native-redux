import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Input from '../components/Input/Input';
import {images, colors, fonts} from '../constants';
import Button from '../components/Button/Button';
import CheckBox from '../components/CheckBox/CheckBox';
import DeviceInfo from 'react-native-device-info'

export default function LoginScreen() {
  const [pageData, setPageData] = useState({
    username: '',
    password: '',
  });
  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMe = () => {
    setRememberMe(remember => !remember);
  };

  const onChangeText = (key, value) => {
    console.log('onchangetext', key, value);
    setPageData(page => ({...page, [key]: value}));
  };

  const versionNumber = DeviceInfo.getVersion()

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.logoContainer}>
          <Image source={images.logo} style={styles.logo} />
        </View>
        <View style={{marginVertical: 15}}>
          <Input
            onChangeText={text => onChangeText('username', text)}
            placeHolder="Kullanıcı adı"
            value={pageData.username}
            icon={'mail-outline'}
            color={colors.cf5f5fb}
            placeHolderTextColor={colors.cf5f5fb}
          />
        </View>
        <View style={{marginVertical: 15}}>
          <Input
            onChangeText={text => onChangeText('password', text)}
            placeHolder="Şifre"
            value={pageData.password}
            isHidden
            icon={'lock-outline'}
            color={colors.cf5f5fb}
            placeHolderTextColor={colors.cf5f5fb}
            style={styles.input}
          />
        </View>
        <View style={styles.rememberMeContainer}>
          <CheckBox
            onChangeState={() => handleRememberMe()}
            checkedColor={colors.white[50]}
            checked={rememberMe}
            style={{marginRight: 10}}
            style={styles.input}
          />
          <Text style={styles.rememberMeText}>Beni Hatırla</Text>
        </View>
        <View style={{marginVertical: 15}}>
          <Button onPress={() => alert('giriş yap')} text="Giriş yap" />
        </View>
      </View>
    <View style={styles.versionNumberContainer}>
      <Text style={styles.versionNumberText}>v {versionNumber}</Text>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    justifyContent: 'center',
  },
  input: {
    marginVertical: 5,
  },
  logo: {width: 300, height: 100, resizeMode: 'contain'},
  logoContainer: {marginBottom: 25, alignItems: 'center'},
  rememberMeContainer: {marginVertical: 15, flexDirection: "row", alignItems: "center", margin: 17},
  rememberMeText: {
    fontSize: fonts.f12,
    fontWeight: "500",
    color: colors.cFFFFFF,
    marginLeft: 5
  },
  versionNumberText: {
    fontSize: fonts.f12,
    color: colors.cFFFFFF
  },
  versionNumberContainer: {
    width: '100%',
    alignItems: "center",
    paddingBottom: 10,
  }
});
