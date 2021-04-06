import React, { useState } from 'react';
import { FlatList, StyleSheet, Button, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const addGoalHandler = () => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddMode(false);
  };
  const cancelGoal = () => {
    setIsAddMode(false);
  };
  return (
    <View style={styles.screen}>
      <Button onPress={() => setIsAddMode(true)} title='Add New Goal' />
      <GoalInput
        onCancel={cancelGoal}
        isAddMode={isAddMode}
        addGoalHandler={addGoalHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItems={(itemData) => <GoalItem title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
