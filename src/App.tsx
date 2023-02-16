import React from 'react'
import './App.css'
import Test from './Test'

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Test myString={'coucou'} myNumber={0} />
    </div>
  )
}

export default App
