import React, { useEffect, useState } from 'react';
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
import {hideLoader, setUser, toggleLoader} from '../redux/system/action';
import axios from '../utils/axios';
import apiConfig from '../config/apiConfig';
import I18n from '../i18n';
export default function HomeScreen() {
  const [pageData, setPageData] = useState({
    description : '',
    projectId : null,
    time: '',
    userId: 1,
  });

  const isDarkMode = useSelector(state => state.system.isDarkMode)
  const dispatch = useDispatch();

  const {width, height} = layout; //dimension dan geldi.

  const userInfo = useSelector(state => state.system.userInfo);

  const [project, setProject] = useState([]);

  

  

  const onChangeText = (key, text) => {
    setPageData(page => ({...page, [key]: text})); 
  }

  const onDonePress = () => {};

  const saveProjectTimeline = () => {
    try {
      axios.post(apiConfig.prefixes.saveProject, pageData).then(response =>console.log(JSON.stringify(response, null, 4)))
    } catch (error) {
      
    }
  }

  const fetchProjectList = () => {
    try {
      dispatch(toggleLoader());

      axios.get(apiConfig.prefixes.projectList).then(response => {
        if (response.status === 200) {
          const {data} = response.data;

          const newData = data
            ? data.map(x => ({
                label: x.name,
                value: x.id,
              }))
            : [];

          setProject(newData);
        }
      });
    } catch (error) {
    } finally {
      dispatch(hideLoader());
    }
  };

  useEffect(() => {
    fetchProjectList()
  }, [])

  const dropdowncontainer = {
    ...styles.dropdownContainer,
    backgroundColor: isDarkMode
    ? colors.dark.primary[6]
    : colors.light.background
  }

  return (
    <CustomView style={{flex: 1}}>
      <Header title={I18n.t('home')} />
      <View style={{flex: 1, margin: 20}}>
        <View style={dropdowncontainer}>
          <Dropdown
            items={[
              {label: 'Coffy', value: 1},
              {label: 'Plugger', value: 2},
              {label: 'Artiiki', value: 3},
            ]}
            placeholder="Proje seçiniz"
            onValueChange={val => onChangeText("projectId", val)}
            onDonePress={() => onDonePress()}
          />
        </View>
        <View style={dropdowncontainer}>
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
          onValueChange={val => onChangeText('time', val)}
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
  dropdownContainer: {
    backgroundColor: colors.cFFFFFF,
    padding: 15,
  }
});
