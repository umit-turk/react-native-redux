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
import {images, colors} from '../constants';
import Button from '../components/Button/Button';

export default function LoginScreen() {
  const [pageData, setPageData] = useState({
    username: '',
    password: '',
  });

  const onChangeText = (key, value) => {
      console.log('onchangetext', key, value)
    setPageData(page => ({...page, [key]: value}));
  };

  return (
   

    <ScrollView
      style={{backgroundColor: colors.backgroundColor}}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image
          source={images.logo}
          style={{width: 300, height: 100, resizeMode: 'contain'}}
        />
        <View style={{marginVertical: 15}}>
          <Input
            style={{marginVertical: 15}}
            onChangeText={text => onChangeText('username', text)}
            placeHolder="Kullanıcı adı"
            value={pageData.username}
            icon={'mail-outline'}
            color={colors.white}
            placeHolderTextColor={colors.white}
          />
            </View>
            <View style={{marginVertical: 15}}>
          <Input
            style={{marginVertical: 15}}
            onChangeText={text => onChangeText('password', text)}
            placeHolder="Şifre"
            value={pageData.password}
            icon={"lock-outline"}
            color={colors.white}
            placeHolderTextColor={colors.white}
          />
            </View>
            <View style={{marginVertical: 15}}>
          <Button
            onPress={() => alert("giriş yap")}
            text="Giriş yap"
          />
          </View>
      </View>
    </ScrollView>

  
  );
}

const styles = StyleSheet.create({
  container: {flex: 1,marginVertical: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.backgroundColor},
});
