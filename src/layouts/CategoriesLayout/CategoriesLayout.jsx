
import { CategoriesList } from 'components/lists'
import { SidebarLayout } from 'layouts'
import React from 'react'

const CategoriesLayout = ({ children }) => (
  <SidebarLayout
    sidebar={
      <>
        <h2 className="noMarginTop">
          Categories
        </h2>
        <CategoriesList items={[]} />
      </>
    }
  >
    {children}
  </SidebarLayout>
)

export default CategoriesLayout
