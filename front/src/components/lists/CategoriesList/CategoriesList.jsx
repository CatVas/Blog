
import { arrayOf, number, oneOfType, shape, string } from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

const CategoriesList = ({ items }) => (
  <ul>
    {items.map(({ label, path }) => (
      <li key={path}>
        <Link to={path}>
          {label}
        </Link>
      </li>
    ))}
  </ul>
)
CategoriesList.defaultProps = {
  items: []
}
CategoriesList.propTypes = {
  items: arrayOf(shape({
    id: oneOfType([ number, string ]).isRequired,
    label: string,
    path: string.isRequired
  }))
}

export default CategoriesList
