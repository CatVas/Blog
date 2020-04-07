
import cn from 'classnames'
import { MAIN_MENU_ITEMS } from 'data/constants'
import { arrayOf, bool, shape, string } from 'prop-types'
import React, { useState } from 'react'
import { Else, If, Then } from 'react-if'
import { Drawer } from 'react-pretty-drawer'
import { Link } from 'react-router-dom'
import st from './Menu.module.css'

const Menu = ({
  className,
  isBurger,
  items
}) => {
  const navCn = cn(st.menu, {
    [className]: className.length > 0,
    [st.burger]: isBurger
  })
  const [isDrawerVisible, toggleDrawerVisible] = useState(false)

  const closeDrawer = () => {
    toggleDrawerVisible(false)
  }
  const clickToggler = () => {
    toggleDrawerVisible(true)
  }

  const renderItems = (
    <ul className={st.items}>
      {items.map(item => (
        <li key={item.path}>
          <Link to={item.path}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  )
  const renderToggler = (
    <span
      className={st.toggler}
      onClick={clickToggler}
    >
      <span className={st.togglerIn} />
    </span>
  )

  return (
    <nav className={navCn}>
      <If condition={isBurger}>
        <Then>
          {renderToggler}
          <Drawer
            closable
            className={st.drawer}
            placement="right"
            visible={isDrawerVisible}
            onClose={closeDrawer}
          >
            {renderItems}
          </Drawer>
        </Then>
        <Else>
          {renderItems}
        </Else>
      </If>
    </nav>
  )
}
Menu.defaultProps = {
  className: '',
  isBurger: false,
  items: MAIN_MENU_ITEMS
}
Menu.propTypes = {
  className: string,
  isBurger: bool,
  items: arrayOf(shape({
    label: string,
    path: string
  }))
}

export default Menu
