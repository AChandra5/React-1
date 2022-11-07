/* eslint-disable no-unreachable */

//App.js file in react is the parent file for all the components like body tag in HTML.
//index.js is the entry point.

import './App.css';
import Component1 from './components/Component1/Component1'
import Component2 from './components/Component2/Component2'


function App() {
  return (
      <div className="App">
        <h1 className='page-title'>My First React App</h1>
        <Component1></Component1>
        <Component2 />
      </div>
  )
}

export default App;

/*
React is a declarative library i.e you tell react what to do. We dont tell react how to do it, react handles it.
  -Using react we can create SPA's (Single Page Applications)
  -Uses virtual DOM.

Components - (those entities which returns JSX)
2 types -
  1. Class based components(JS classes) and 
  2. Function based components(JS functions). The above thing is function based.

Properties:
  -Create Parts of UI
  -Can be nested
  -Can be reused

JSX:
  JS + XML
*/