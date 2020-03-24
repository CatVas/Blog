
import { BaseLayout } from 'layouts'
import { node, string } from 'prop-types'
import React from 'react'
import { Container } from 'react-grid-system'

const BlogLayout = ({
  children,
  path
}) => (
  <BaseLayout path={path}>
    <Container>
      {children}
    </Container>
  </BaseLayout>
)

BlogLayout.defaultProps = {
  path: ''
}
BlogLayout.propTypes = {
  children: node,
  path: string
}

export default BlogLayout
