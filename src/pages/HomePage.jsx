
import { BaseLayout } from 'layouts'
import React from 'react'

const HomePage = ({
  match: { path }
}) => (
  <BaseLayout path={path}>
    Home page (Landing).
  </BaseLayout>
)

export default HomePage
