import { Provider } from 'react-redux';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';
import RouterComponent from './routes';
import { store } from './redux/store';

const persistor = persistStore(store);

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterComponent />
    </PersistGate>
  </Provider>
);

export default App;
