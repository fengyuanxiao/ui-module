import React, { useState } from 'react';
import logo from './logo.svg';
import LikeButton from './components/1.LikeButton';
// 引入自定义hook
// import useMousePosition from './hooks/useMousePosition';
// import useURLLoader from './hooks/useURLLoader'
import './App.css';

interface IShowResult {
  message: string
  status: string
}

interface IThemeProps {
  [key: string]: {color: string; background: string}
}

const themes: IThemeProps = {
  'light': {
    color: '#000',
    background: '#eee',
  },
  'dark': {
    color: '#fff',
    background: '#222',
  }
}
export const ThemeContext = React.createContext(themes.light)

const App: React.FC = () => {
  const [ show, setShow ] = useState(true)
  // const positions = useMousePosition()
  // const [ data, loading ] = useURLLoader('https://dog.ceo/api/breeds/image/random', [show])
  // const dogResult = data as IShowResult
  
  return (
    <div className="App">
      <ThemeContext.Provider value = {themes.dark}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <button onClick = { () => { setShow(!show) } }>Toggle Tracker</button>
          </p>
          {/* {
            loading ? <p>狗图正在加载...</p>:
            <img src={ dogResult && dogResult.message } />
          } */}
          <LikeButton />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
