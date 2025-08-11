import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BodySection from './components/BodySection'
import appStore from './utils/appStore'
import { Provider } from 'react-redux'

function App() {
  

  return (
    <Provider store={appStore}>
     <BodySection/>
    </Provider>
  )
}

export default App;
