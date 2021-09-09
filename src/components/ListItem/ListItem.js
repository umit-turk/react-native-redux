import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';
import {colors, fonts} from '../../constants';

export default function ListItem({data, markTodoComplete, deleteTodo}) {
  const isDarkMode = useSelector(state => state.system.isDarkMode);

    

  return (
    <View style={isDarkMode === false ? styles.listItem : styles.listItem}>
      <View style={{flex: 1}}>
        <Text
          style={[
            styles.textArea,
            {
              color: isDarkMode
                ? colors.dark.text[100]
                : colors.light.white[100],
                textDecorationLine: data?.completed ? "line-through": 'none'
            },
          ]}>
          {data?.task}
        </Text>
      </View>
      {!data?.completed && (
        <TouchableOpacity onPress={() => markTodoComplete(data.id)}>
          <View style={[styles.actionIcon, {backgroundColor: 'green'}]}>
            <Icon name="done" size={20} color={colors.cFFFFFF} />
          </View>
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={() => deleteTodo(data.id)}>
        <View style={styles.actionIcon}>
          <Icon name="delete" size={20} color={colors.cFFFFFF} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 20,
    flexDirection: 'row',
    elevation: 12,
    borderRadius: 10,
    marginVertical: 10,
  },
  textArea: {
    fontWeight: 'bold',
    fontSize: fonts.f13,
  },
  actionIcon: {
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    marginLeft: 5,
    borderRadius: 5,
  },
});
