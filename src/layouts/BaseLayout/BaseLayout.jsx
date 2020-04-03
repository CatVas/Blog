
import { Logo, Menu } from 'components'
import { RESPONSIVE_POINTS, YEAR } from 'data/constants'
import { node, string } from 'prop-types'
import React from 'react'
import { useDimensions } from 'react-dimensions-hook'
import { Container } from 'react-grid-system'
import { Link } from 'react-router-dom'
import st from './BaseLayout.module.css'

const BaseLayout = ({
  children,
  path
}) => {
  const { ref, dimensions } = useDimensions()
  const isMenyBurger = dimensions.width < RESPONSIVE_POINTS.XS
  const linkedLogo = (path === '/') ? (
    <Logo />
  ) : (
    <Link to="/">
      <Logo />
    </Link>
  )

  return (
    <div
      className={st.layout}
      ref={ref}
    >
      <header className={st.header}>
        <Container className={st.headerInner}>
          {linkedLogo}
          <Menu
            className={st.menu}
            isBurger={isMenyBurger}
          />
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
