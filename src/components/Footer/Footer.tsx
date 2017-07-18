import * as React from 'react';
import { Container, Row, Col, Alert } from 'reactstrap';

import './Footer.css';

export class Footer extends React.Component<{}, {}> {
  render() {
    return(
      <div className="app-footer">
        <Container>
         <Row>
           <Col xs="3">links</Col>
           <Col xs="auto">
            <Alert color="info">
              <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
             </Alert>
           </Col>
           <Col xs="3">contacts</Col>
         </Row>
       </Container>
      </div>
    );
  }
}
