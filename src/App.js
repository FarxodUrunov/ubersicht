import { useState } from 'react';
import BaseTabs from './components/BaseTabs/BaseTabs';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import logo from './logo.svg'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };
  return (
    <div className={`vh-100 bg-${isDarkMode ? 'dark' : ''}`} >
      <div className='container'>
        <header>
          <div className='d-flex align-items-center justify-content-between' >
            <h1 className={`fs-2 text-${isDarkMode ? 'white' : 'dark'}`} >Schichtbuch</h1>
            <div className='d-flex justify-content-evenly align-items-center' >
              <img width={100} height={60} src={logo} alt='logo' />
              <span className={`d-flex align-items-center rounded p-1 mr-4 bg-${isDarkMode ? 'white' : 'dark'}`} >
                <DarkModeSwitch
                  style={{ marginBottom: '0rem' }}
                  moonColor='black'
                  sunColor='white'
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                  size={20}
                />
              </span>
            </div>
          </div>
        </header>
        <BaseTabs darkMode={isDarkMode} />

      </div>
    </div>
  );
}

export default App;
