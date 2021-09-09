import React from 'react';
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
import Header from '../components/Header';
import {colors, fonts} from '../constants';
import Dropdown from '../components/DropDown';
import I18n, {changeLanguage} from '../i18n';

export default function ProfileScreen({navigation}) {
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
    changeLanguage(language);
    navigation.navigate('Profile');
  };
  return (
    <CustomView style={styles.container}>
      <Header title="profil" />
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View>
            <View style={styles.infoBox}>
              {userInfo?.profilPic ? (
                <Image
                  source={{uri: userInfo.profilPic}}
                  style={styles.profileImage} 
                  resizeMethod="scale"
                  resizeMode = "contain"
                />
              ) : (
                <Image
                  source={require('../assets/images/logo.png')}
                  style={styles.profileImage} 
                  resizeMethod="scale"
                  resizeMode = "contain"
                />
              )}

             
              {/* <View style={styles.infoContainer}> */}
              <View style={styles.cell}>
                <Text style={styles.info}>Ünvan</Text>
                <Text style={styles.info}>{userInfo.title}</Text>
              </View>
              {/* </View> */}
              {/* <View style={styles.infoContainer}> */}
              <View style={styles.cell}>
                <Text style={styles.info}>Şirket adı</Text>
                <Text style={styles.info}>{userInfo.company}</Text>
              </View>
              {/* </View> */}
              <View style={styles.cell}>
                <Text style={styles.info}>{userInfo.displayName}</Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.info}>{userInfo.mobile}</Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.info}>{userInfo.managerDisplayName}</Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.info}>{userInfo.unitName}</Text>
              </View>
              <View style={styles.cell}>
                <Text style={styles.info}>{userInfo.profilPic}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                
                <Switch
                  onValueChange={val => toggleTheme(val)}
                  value={isDarkMode}
                />
                <Text style={{color: colors.cFFFFFF, marginHorizontal: 10}}>
                  Tema Seçimi
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={{color: colors.cFFFFFF, marginHorizontal: 10}}>
                  Dil Seçimi
                </Text>
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
              <View>
                <TouchableOpacity style={styles.title} onPress={() => logOut()}>
                  <Text style={{fontSize: fonts.f14, color: colors.white[100]}}>
                    Çıkış yap
                  </Text>
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
    marginTop: Platform.OS === 'android' ? 15 : 0,
  },
  cell: {flex: 1},
  topBackground: {},
  title: {marginTop: 10, fontSize: fonts.f12, marginBottom: 5},
  info: {
    fontSize: fonts.f13,
    color: colors.white[100],
  },

  infoBox: {
    marginTop: -10,
    marginHorizontal: 30,
    padding: 20,
    elevation: 3,
  },
  infoContainer: {
    marginTop: 5,
    paddingBottom: 10,
    borderWidth: 0.5,
    borderColor: colors.dark.primary[5],
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
