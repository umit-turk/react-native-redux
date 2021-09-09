import React, { useState } from 'react';
import {View, Text,  StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {userLogOut} from '../redux/system/action';
import {WebView} from 'react-native-webview';
import {colors, layout} from '../constants';
import CustomView from '../components/CustomView';
import Header from '../components/Header';
import Dropdown from '../components/DropDown';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';

export default function HomeScreen() {
  const [pageData, setPageData] = useState({
    description : '',
    projectId : null,
    time: '',
  });
  const dispatch = useDispatch();

  const {width, height} = layout; //dimension dan geldi.

  const userInfo = useSelector(state => state.system.userInfo);

  const logOut = () => {
    dispatch(userLogOut());
  };

  const handleLanguageChange = value => {
    console.log('lang', value);

    if (value) {
    }
  };

  const onChangeText = (key, text) => {
    setPageData(page => ({...page, [key]: text})); 
  }

  const onDonePress = () => {};

  const saveProjectTimeline = () => {

  }

  return (
    <CustomView style={{flex: 1}}>
      <Header title="Anasayfa" />
      <View style={{flex: 1, margin: 20}}>
        <View style={styles.inputContainer}>
          <Dropdown
            items={[
              {label: 'Coffy', value: 1},
              {label: 'Plugger', value: 2},
              {label: 'Artiiki', value: 3},
            ]}
            placeholder="Proje seçiniz"
            onValueChange={val => handleLanguageChange(val)}
            onDonePress={() => onDonePress()}
          />
        </View>
        <View>
        <Dropdown
          items={[
            {label: '1 saat', value: 60},
            {label: '2 saat', value: 120},
            {label: '3 saat', value: 180},
            {label: '4 saat', value: 240},
            {label: '5 saat', value: 300},
            {label: '6 saat', value: 360},
            {label: '7 saat', value: 420},
            {label: '8 saat', value: 480},
          ]}
          placeholder="Süre seçiniz"
          onValueChange={val => handleLanguageChange(val)}
          onDonePress={() => onDonePress()}
        />
        </View>
        <Input
          placeHolder="Proje açıklaması ekleyiniz"
          style={styles.inputContainer}
          onChangeText={val => onChangeText('description', val)}
          value={pageData.description}
          multiline
          color={colors.cFFFFFF}
        />
        <View  style={styles.inputContainer}>
        <Button onPress={() => saveProjectTimeline()} text={"çalışmamı kaydet"} />
        </View>
        {/* <WebView source={{uri: 'https://infinite.red'}} style={{width, height,}} /> */}
      </View>
    </CustomView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 15,
  },
});
