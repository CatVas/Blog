
import { BaseLayout } from 'layouts'
import { node, string } from 'prop-types'
import React, { useState } from 'react'
import { Col, Container, Hidden, Row, Visible } from 'react-grid-system'
import { Drawer } from 'react-pretty-drawer'
import st from './SidebarLayout.module.css'

const SidebarLayout = ({
  children,
  path,
  sidebar
}) => {
  const [drawer, showDrawer] = useState(false)
  const handleDrawerClose = () => {
    showDrawer(false)
  }
  const handleDrawerShow = () => {
    showDrawer(true)
  }

  return (
    <BaseLayout path={path}>
      <Container>
        <Row>
          <Col>
            {children}
          </Col>
          <Hidden xs>
            <Col sm={4} md={3}>
              {sidebar}
            </Col>
          </Hidden>
        </Row>
      </Container>
      <Visible xs>
        <Drawer
          closable
          visible={drawer}
          placement="right"
          width="300px"
          onClose={handleDrawerClose}
        >
          <div className={st.drawerContent}>
            {sidebar}
          </div>
        </Drawer>
        <span
          className={st.drawerHandler}
          onClick={handleDrawerShow}
        >
          >
        </span>
      </Visible>
    </BaseLayout>
  )
}

SidebarLayout.defaultProps = {
  children: null,
  path: '',
  sidebar: null
}
SidebarLayout.propTypes = {
  children: node,
  path: string,
  sidebar: node
}

export default SidebarLayout
