import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, Alert, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';
import CustomView from '../components/CustomView';
import ListItem from '../components/ListItem/ListItem';
import {colors} from '../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/Header';
import I18n from '../i18n';
const storageKey = 'todo';

 function TaskScreen() {
  const isDarkMode = useSelector(state => state.system.isDarkMode);
  const [todo, setTodo] = useState([]);
  const [textInput, setTextInput] = useState('');

  const addTodo = () => {
    if (textInput === '') {
      Alert.alert('hata', 'lütfen görevi boş bırakmayınız');
    } else {
      const newTodo = {
        id: Math.random(),
        task: textInput,
        completed: false,
      };
      setTodo([...todo, newTodo]);
      setTextInput('');
    }
  };
  console.log('addTodo', todo);

  const getTodoFromUserDevive = async () => {
    try {
      const response = await AsyncStorage.getItem(storageKey);

      console.log('Response gettodofromuserdevice', response);

      if (response) {
        const parseJson = JSON.parse(response);

        setTodo(parseJson);
      }
    } catch (error) {
      console.log('error getTodoFromUserDevive', error);
    }
  };

  const saveTodoUserDevice = async payload => {
    try {
      const response = JSON.stringify(payload);
      await AsyncStorage.setItem(storageKey, response);
    } catch (error) {
      console.log('error saveTodoUserDevice', error);
    }
  };

 const markTodoComplete = todoId => {
    const newTodoItem = todo.map(item => {
      if ((item.id === todoId)) {
        return {...item, completed: true};
      }
      return item;
    });
    setTodo(newTodoItem);
  };

  const deleteTodo = todoId => {
    const newTodoItem = todo.filter(item => item.id !== todoId);
    setTodo(newTodoItem);

    saveTodoUserDevice()
  };

  useEffect(() => {
    getTodoFromUserDevive();
  }, []);
  useEffect(() => {
    saveTodoUserDevice(todo);
  }, [todo]);

  return (
    <CustomView style={styles.container}>
        <Header title={I18n.t("task")}/>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={todo}
        renderItem={({item}) => (
          <ListItem
            markTodoComplete={markTodoComplete}
            data={item}
            deleteTodo={deleteTodo}
          />
        )}
      />
      <View style={styles.footer}>
        <View style={styles.inputContiner}>
          <TextInput
            placeholder="Task ekleyiniz..."
            onChangeText={setTextInput}
            placeholderTextColor={colors.cFFFFFF}
            value={textInput}
            style={styles.input}
          />
        </View>
        <View style={styles.iconContainer}>
          <Icon
            name="add"
            color={isDarkMode ? colors.dark.background : colors.light.text[100]}
            size={30}
            onPress={addTodo}
          />
        </View>
      </View>
      
    </CustomView>
  );
}

export default TaskScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  inputContiner: {
    height: 50,
    paddingHorizontal: 10,
    elevation: 40,
    flex: 1,
    marginVertical: 20,
    marginRight: 10,
  },
  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: colors.cf5f5fb,
    elevation: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25, // width ve height'in yarısını verirsek tam bir oval görüntü oluşur.
  },
  input: {
    color: colors.cFFFFFF,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: colors.cFFFFFF,
  },
});
