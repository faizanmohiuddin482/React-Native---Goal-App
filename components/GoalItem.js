import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalItem = (props) => {
  return (
    <View style={styles.listItems}>
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItems: {
    padding: 10,
    width: '80%',
    margin: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default GoalItem;
