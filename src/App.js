import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import Mainbody from './components/mainbody.js';

function App() {
  return (
    <div className='body'>
        <Header></Header>
        <div className='maincontainer'>
        <Mainbody></Mainbody>
      </div>
    </div>
  );
}

export default App;
