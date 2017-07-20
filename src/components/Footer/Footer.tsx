import * as React from 'react';
import { Container, Row, Col, Alert } from 'reactstrap';
import { InlineForm } from '../InlineForm/InlineForm';
import './Footer.css';

// define state interface
export interface FooterState {
  nameValue: string;
  emailValue: string;
  isSuccesMessage: boolean;
}

export class Footer extends React.Component<{}, FooterState> {
  // in constructor we define initial state
  constructor(props: FooterState) {
    super(props);
    this.state = {
      nameValue: '',
      emailValue: '',
      isSuccesMessage: false
    };
  }

  // call this function whent you want to render succes method
  renderSuccesMessage = (): JSX.Element => {
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
  // pass this function to InlineForm props to move data up
  onHandleContactsFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    // prevents default action when form is being submitted. In this case we prevent refreshing page
    event.preventDefault();
    // expr1 && expr2 - if expr1 == true, then execute expr2

    if (this.state.emailValue && this.state.nameValue) {
      this.setState({isSuccesMessage : true});
    }
  }
  // pass this function to InlineForm props to move data up
  onHandleInputNameChange = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({nameValue: event.currentTarget.value});
  }
  // pass this function to InlineForm props to move data up
  onHandleInputEmailChange = (event: React.FormEvent<HTMLInputElement>): void => {
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
