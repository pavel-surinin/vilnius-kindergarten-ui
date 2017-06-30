import React from 'react' // eslint-disable-line no-unused-vars
import propTypes from 'prop-types'
import {styles} from './styles'

export function FunctionalHeader({name}) {
  const yoName = `yo, ${name}`
  return (
    <div style={styles.header}>
      <h3>Hello,
        <span style={styles.headerText}>
          {yoName}!
        </span>
      </h3>
    </div>
  )
}

FunctionalHeader.defaultProps = {
  name: 'World'
}

FunctionalHeader.propTypes = {
  name : propTypes.string
}
