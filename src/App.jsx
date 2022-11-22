import './App.scss';
import { Products } from './components';
import MasterContextProvider from './contexts';

function App() {
  return (
    <div className="app">
      <MasterContextProvider>
        <Products />
      </MasterContextProvider>
    </div>
  );
}

export default App;
