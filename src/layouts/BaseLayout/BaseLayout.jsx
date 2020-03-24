
import { Logo } from 'components'
import { YEAR } from 'data/constants'
import { node, string } from 'prop-types'
import React from 'react'
import { Container } from 'react-grid-system'
import { Link } from 'react-router-dom'
import st from './BaseLayout.module.css'

const BaseLayout = ({
  children,
  path
}) => {
  const linkedLogo = (path === '/') ? (
    <Logo />
  ) : (
    <Link to="/">
      <Logo />
    </Link>
  )

  return (
    <div className={st.layout}>
      <header className={st.header}>
        <Container>
          {linkedLogo}
          Menu
        </Container>
      </header>
      <main className={st.main}>
        {children}
      </main>
      <footer className={st.footer}>
        Copyright &copy; {YEAR} - All rights reserved.
      </footer>
    </div>
  )
}

BaseLayout.defaultProps = {
  path: ''
}

BaseLayout.propTypes = {
  children: node,
  path: string
}

export default BaseLayout
