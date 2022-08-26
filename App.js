import React from 'react';
import {Text} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import MyTodo from './screens/Todo';
import {store, persistor} from './redux/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <MyTodo />
      </PersistGate>
    </Provider>
  );
};

export default App;
