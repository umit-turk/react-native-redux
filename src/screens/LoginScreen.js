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
import DeviceInfo from 'react-native-device-info';
import CustomView from '../components/CustomView';
import {useDispatch, useSelector} from 'react-redux';
import {hideLoader, setUser, toggleLoader} from '../redux/system/action';
import I18n from '../i18n'

export default function LoginScreen() {

  const usernameText = I18n.t('username');
  const passwordText = I18n.t('password');
  const remembermeText = I18n.t('rememberMe');
  const loginText = I18n.t('login');

  const dispatch = useDispatch();
  const userInfo = useSelector(state => console.log("userInfo",state.system));
  const loading = useSelector(state => state.system.loading)

  const [pageData, setPageData] = useState({
    username: 'umit',
    password: '1234',
  });
  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMe = () => {
    setRememberMe(remember => !remember);
  };

  const onChangeText = (key, value) => {
    console.log('onchangetext', key, value);
    setPageData(page => ({...page, [key]: value}));
  };

  const versionNumber = DeviceInfo.getVersion();


  const onLogin = () => {
    dispatch(toggleLoader())
    dispatch(
      setUser({
        name: 'yasar',
        surname: 'turk',
        displayName: "umit turk",
        token : "fdsnnfdsknlew",
        company: "artiiki",
        mobile: "392018392",
        title: "mobile developer",
        managerDisplayName: "umit turk",
        unitName: "Mobil geliştirici",
        profilPic: "https://picsum.photos/id/237/200/300"
      })
    );
    dispatch(hideLoader())
  };
  console.log("loading", loading)

  return (
    <CustomView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.logoContainer}>
          <Image source={images.logo} style={styles.logo} />
        </View>
        <View style={styles.inputContainer}>
          <Input
            onChangeText={text => onChangeText('username', text)}
            placeHolder={usernameText}
            value={pageData.username}
            icon={'mail-outline'}
            color={colors.cf5f5fb}
            placeHolderTextColor={colors.cf5f5fb}
          />
        </View>
        <View style={styles.inputContainer}>
          <Input
            onChangeText={text => onChangeText('password', text)}
            placeHolder={passwordText}
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
          <Text style={styles.rememberMeText}>{remembermeText}</Text>
        </View>
        <View style={{marginVertical: 15}}>
          <Button onPress={() => onLogin()} text={loginText} />
        </View>
      </View>
      <View style={styles.versionNumberContainer}>
        <Text style={styles.versionNumberText}>v {versionNumber}</Text>
      </View>
      
    </CustomView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    marginVertical: 5,
  },
  inputContainer: {margin: 15},
  logo: {width: 300, height: 100, resizeMode: 'contain'},
  logoContainer: {marginBottom: 25, alignItems: 'center'},
  rememberMeContainer: {
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 17,
  },
  rememberMeText: {
    fontSize: fonts.f12,
    fontWeight: '500',
    color: colors.cFFFFFF,
    marginLeft: 5,
  },
  versionNumberText: {
    fontSize: fonts.f12,
    color: colors.cFFFFFF,
  },
  versionNumberContainer: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 10,
  },
});
