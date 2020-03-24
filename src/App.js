
import { HomePage } from 'pages'
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Route
        exact
        component={HomePage}
        path="/"
      />
    </BrowserRouter>
  )
}

export default App
