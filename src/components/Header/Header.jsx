import React from 'react'
import propTypes from 'prop-types'
import styles from './header.css'

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name : `dear ${props.name}`}
  }
  render(){
      return (
        <div className={styles.underlineHeader}>
          <h3 className={styles.headerText}>Hello, 
            <span id={styles.headeris}>{this.state.name}</span>
            !
          </h3>
        </div>
      )
  }
}

Header.defaultProps = {
  name: 'World'
}

Header.propTypes = {
  name : propTypes.string
}
