import React from 'react'
import propTypes from 'prop-types'
import styles from './header.css'
import {PageHeader} from 'react-bootstrap'

export class Header extends React.Component {
  render(){
      return (
        <PageHeader>
          {this.props.name}
          <br/>
          <small className={styles.subHeader}>
            Web App for some lyrics
          </small>
        </PageHeader>
      )
  }
}

Header.defaultProps = {
  name: 'World'
}

Header.propTypes = {
  name : propTypes.string
}
