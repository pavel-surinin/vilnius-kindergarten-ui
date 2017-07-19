import * as React from 'react';
import { Container, Row, Col, Alert } from 'reactstrap';
import { InlineForm } from '../InlineForm/InlineForm';
import './Footer.css';

export interface FooterState {
  nameValue: string;
  emailValue: string;
  isSuccesMessage: boolean;
}

export class Footer extends React.Component<{}, FooterState> {
  constructor(props: FooterState) {
    super(props);
    this.state = {
      nameValue: '',
      emailValue: '',
      isSuccesMessage: false
    };
  }

  renderSuccesMessage = () => {
    return(
      <Alert color="info">
        <strong>You have just registered to newsletter</strong>
        <div>
          name: <b>{this.state.nameValue}</b><br/>
          email: <b>{this.state.emailValue}</b><br/>
        </div>
      </Alert>
    );
  }

  onHandleContactsFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (this.state.emailValue && this.state.nameValue) {
      this.setState({isSuccesMessage : true});
    }
  }
  onHandleInputNameChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({nameValue: event.currentTarget.value});
  }
  onHandleInputEmailChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({emailValue: event.currentTarget.value});
  }

  render() {
    return(
      <div className="app-footer">
        <Container>
         <Row>
           <Col xs="3">some cool links</Col>
           <Col xs="6">
            {this.state.isSuccesMessage && this.renderSuccesMessage()}
           </Col>
           <Col xs="3">
             <InlineForm
                onHandleContactsFormSubmit={this.onHandleContactsFormSubmit}
                onHandleInputNameChange={this.onHandleInputNameChange}
                onHandleInputEmailChange={this.onHandleInputEmailChange}
             />
           </Col>
         </Row>
       </Container>
      </div>
    );
  }
}
