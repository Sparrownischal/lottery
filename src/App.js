// import logo from './logo.svg';
import './App.css';
import NumberButtons from './components/NumberButtons';
import Selected from './components/Selected';
import First from './components/First';

function App() {
  return (
    <div className="App">
      <header className="header-container">

        <h1 className='header-text'> WHE WHE on D' Avenue </h1>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>

      <div className='main'>
        <div className='first'>
          <First/>

        </div>
        <div className='second'>
          <NumberButtons/>

        </div>
        <div className='third'>
          <Selected/>
        </div>

      </div>


      
    </div>
  );
}

export default App;
