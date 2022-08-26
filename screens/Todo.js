import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {addTodo} from '../redux/action';

export default function BooksListApp() {
  const [task, setTask] = useState('');
  const todoList = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(addTodo(task));
    setTask('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        React Native ToDo App with Redux Persist{' '}
      </Text>
      <Text style={styles.title}> Add ToDo Here</Text>
      <TextInput
        style={styles.input}
        mode="outlined"
        label="Task"
        value={task}
        onChangeText={task => setTask(task)}
      />
      <Button title="Add" color="#841584" onPress={handleAddTodo} />
      <FlatList
        data={todoList}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          return <Text style={styles.list}>{item.task}</Text>;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    margin: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  list: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
