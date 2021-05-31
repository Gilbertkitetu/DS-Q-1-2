import logo from './logo.svg';
import Text from './component/text';
import './App.css';
import Calculate from './component/calculate';

function App() {
  
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <Text/>
       <Calculate/>

      </header>
    </div>
  );
}

export default App;
