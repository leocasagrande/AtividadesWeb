import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TaskList = ({ task, onDeleteTask }) => {
  return (
    <View style={styles.taskContainer}>
      <Text style={styles.taskText}>{task.text}</Text>
      <TouchableOpacity onPress={() => onDeleteTask(task.id)}>
        <Text style={styles.deleteText}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  taskText: {
    fontSize: 16,
  },
  deleteText: {
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
  },
});

export default TaskList;