
import { BlogPage, HomePage } from 'pages'
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
      <Route
        component={BlogPage}
        path="/blog"
      />
    </BrowserRouter>
  )
}

export default App
