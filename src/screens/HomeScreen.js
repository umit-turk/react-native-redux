import React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {userLogOut} from '../redux/system/action';
import { WebView } from 'react-native-webview';
import { layout } from '../constants';

export default function HomeScreen() {
  const dispatch = useDispatch();

  const {width, height} = layout;

  

  const userInfo = useSelector(state => state.system.userInfo)

  const logOut = () => {
    dispatch(userLogOut());
};

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>HomeScreen hoşgeldin {userInfo.name}  </Text>
      <WebView source={{uri: 'https://infinite.red'}} style={{width, height,}} />
      <Button title="çıkış yap" onPress={() => logOut()} />
    </View>
  );
}
