import React from 'react'
import styles from './styles/style.css'
import {Header} from './components/Header/Header.jsx'
import {NavigaTionBar} from './components/NavigationBar/NavigationBar.jsx'
import {Grid, Row, Col, Panel} from 'react-bootstrap'
import {Footer} from './components/Footer/Footer.jsx'
export class App extends React.Component{
  render () {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} smOffset={1} sm={10} mdOffset={2} md={8} lgOffset={2} lg={8}>
              <NavigaTionBar/>
              <Header name='Vilnius Kindergarten UI'/>
              <Panel bsStyle="primary">
                some super content
              </Panel>
              <Footer/>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
