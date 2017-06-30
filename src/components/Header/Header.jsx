import React from 'react'
import propTypes from 'prop-types'
import styles from './header.css'

export class Header extends React.Component {
  decorate(label) {
    return `~~${label}~~`
  }
  constructor(props) {
    super(props);
    this.state = {name : `parent ${props.name}`}
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

export class HeaderChild extends Header {
  constructor(props){
    super(props)
    this.state = {name : `son ${this.state.name}`}
  }
  render(){
      return super.render()
  }
}

export class HeaderGrandChild extends HeaderChild {
  constructor(props){
    super(props)
    this.state = {name : `grand ${super.decorate(this.state.name)}`}
  }
  render(){
      return super.render()
  }
}

Header.defaultProps = {
  name: 'World'
}

Header.propTypes = {
  name : propTypes.string
}
