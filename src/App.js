import React from 'react'
import ReactDOM from 'react-dom'
import styles from './styles/style.css' // eslint-disable-line no-unused-vars
import {Header} from './components/Header/Header.jsx' // eslint-disable-line no-unused-vars
import {FunctionalHeader} from './components/FunctionalHeader/FunctionalHeader.jsx' // eslint-disable-line no-unused-vars

export class App extends React.Component{
  render () {
    return (
      <div>
        <Header name='ComponentHeader'/>
        {/*TODO create these components to finish page template*/}
        {/*<Navigation>*/}
        {/*Body*/}
        {/*Footer*/}
        <FunctionalHeader name='FunctionalHeader'/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("app"));
