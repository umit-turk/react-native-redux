import React, { useState } from 'react';
import {
  View,
  Text,
  Switch,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setLanguage, setTheme, userLogOut} from '../redux/system/action';
import CustomView from '../components/CustomView/index';
import CustomText from '../components/Text';
import Header from '../components/Header';
import {colors, fonts} from '../constants';
import Dropdown from '../components/DropDown';
import I18n, {changeLanguage} from '../i18n';

export default function ProfileScreen({navigation}) {

  const [lang, setLang] = useState('tr'); 

  const profileTitle = I18n.t('profile');

  const isDarkMode = useSelector(state => state.system.isDarkMode);
  const userInfo = useSelector(state => state.system.userInfo);
  const language = useSelector(state => state.system.language);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(userLogOut());
  };

  const toggleTheme = val => {
    dispatch(setTheme(val));
    console.log('switch value', val);
  };

  const handleLanguageChange = lang => {
    console.log('lang', lang);

    if (lang) {
      dispatch(setLanguage(lang));
    }
  };

  const onDonePress = () => {
    setLang(language)
    changeLanguage(language);
    navigation.navigate('Profile')
  };

  const infoBoxStyle = {
    ...styles.infoBox,
    backgroundColor: isDarkMode
      ? colors.dark.black[30]
      : colors.light.background,
  };

  const cellStyle = {
    ...styles.cell,
    borderBottomColor: isDarkMode
      ? colors.dark.white[100]
      :  colors.dark.primary[5]
  };

  return (
    <CustomView style={styles.container}>
      <Header title={profileTitle} />
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          {userInfo?.profilPic ? (
            <Image
              source={{uri: userInfo.profilPic}}
              style={styles.profileImage}
              resizeMethod="scale"
              resizeMode="contain"
            />
          ) : (
            <Image
              source={require('../assets/images/logo.png')}
              style={styles.profileImage}
              resizeMethod="scale"
              resizeMode="contain"
            />
          )}
          <View style={cellStyle}>
            <Text style={styles.displayName}>{userInfo.displayName}</Text>
          </View>

          <View style={infoBoxStyle}>
            <View style={styles.infoContainer}>
              <View style={cellStyle}>
                <CustomText style={styles.title} text={I18n.t("title")} />
                <CustomText style={styles.info} text={userInfo.title} />
              </View>

              <View style={cellStyle}>
              <CustomText style={styles.title} text={I18n.t("company")} />
                <CustomText style={styles.info} text={userInfo.company} />
              </View>

              <View style={cellStyle}>
              <CustomText style={styles.title} text={I18n.t("mobile")} />
                <CustomText style={styles.info} text={userInfo.mobile} />
              </View>
              <View style={cellStyle}>
              <CustomText style={styles.title} text={I18n.t("manager")} />
                <CustomText
                  style={styles.info}
                  text={userInfo.managerDisplayName}
                />
              </View>
              <View style={cellStyle}>
              <CustomText style={styles.title} text={I18n.t("unit")} />
                <CustomText style={styles.info} text={userInfo.unitName} />
              </View>
            </View>
          </View>
          <View style={infoBoxStyle}>
            <View style={styles.infoContainer}>
              <View style={cellStyle}>
              <CustomText style={styles.title} text={I18n.t("themeChoose")} />

                <View style={styles.row}>
                <CustomText style={styles.title} text="Dark Mode" />
                  <Switch
                    onValueChange={val => toggleTheme(val)}
                    value={isDarkMode}
                  />
                </View>
              </View>
              <View style={cellStyle}>
              <CustomText style={styles.title} text={I18n.t("languageChoose")} />

                <View style={{marginVertical: 10}}>
                  <Dropdown
                    items={[
                      {label: 'Türkçe', value: 'tr'},
                      {label: 'English', value: 'en'},
                    ]}
                    value={language}
                    placeholder="Dil seçiniz"
                    onValueChange={val => handleLanguageChange(val)}
                    onDonePress={() => onDonePress()}
                  />
                </View>
              </View>

              <View>
                <TouchableOpacity
                  style={{marginVertical: 15}}
                  onPress={() => logOut()}>
                  <CustomText
                    style={{fontSize: fonts.f14}}
                    text="çıkış yap"></CustomText>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </CustomView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    paddingBottom: 20,
    margin: 30,
  },
  cell: {
    paddingVertical: 17,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.dark.primary[5],
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topBackground: {},
  title: {marginVertical: 5, fontSize: fonts.f12, marginBottom: 5},
  info: {
    fontSize: fonts.f13,
    fontWeight: '400',
  },
  displayName: {fontSize: fonts.f15, color: colors.white[100]},
  infoBox: {
    width: '100%',
    borderRadius: 6,
    backgroundColor: colors.cFFFFFF,
    marginVertical: 15,
    elevation: 3,
  },
  infoContainer: {
    padding: 20,
    elevation: 3,
    marginTop: 5,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
