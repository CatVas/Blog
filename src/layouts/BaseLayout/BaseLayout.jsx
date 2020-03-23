
import { YEAR } from 'data/constants'
import { node } from 'prop-types'
import React from 'react'
import { Container } from 'react-grid-system'
import st from './BaseLayout.module.css'

const BaseLayout = ({ children }) => (
  <div className={st.layout}>
    <header className={st.header}>
      <Container>
        Header: logo + menu
      </Container>
    </header>
    <main className={st.main}>
      <Container>
        {children}
      </Container>
    </main>
    <footer className={st.footer}>
      Copyright &copy; {YEAR} - All rights reserved.
    </footer>
  </div>
)

BaseLayout.propTypes = {
  children: node
}

export default BaseLayout
