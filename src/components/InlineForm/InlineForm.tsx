import * as React from 'react';
import { Input, Button } from 'reactstrap';

export interface InlineFormProps {
  onHandleContactsFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onHandleInputNameChange: (event: React.FormEvent<HTMLInputElement>) => void;
  onHandleInputEmailChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

export class InlineForm extends React.Component<InlineFormProps, {}> {
  render() {
    return(
      <form onSubmit={this.props.onHandleContactsFormSubmit}>
        <div>
          <Input
            type="text"
            placeholder="name"
            name="name"
            onChange={this.props.onHandleInputNameChange}
          />
          <Input
            type="email"
            placeholder="email"
            name="email"
            onChange={this.props.onHandleInputEmailChange}
          />
          <Button>Submit</Button>
        </div>
      </form>
    );
  }
}
