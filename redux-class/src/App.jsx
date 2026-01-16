import './App.css';
import AddForm from './components/AddForm';
import { Provider } from 'react-redux';
import { store } from './app/store';

function App() {
  return (
    <Provider store={store}>
      <h1>Redux Todo App</h1>
      <AddForm />
    </Provider>
  );
}

export default App;
