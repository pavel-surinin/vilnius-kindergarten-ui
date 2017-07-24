import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Button } from 'reactstrap';
interface GardenProps extends RouteComponentProps<{id: string}> {
}

export class Garden extends React.Component<GardenProps, {}> {
  onHandleBack = () => {
    this.props.history.goBack();
  }

  onHandleGoHome = () => {
      this.props.history.push('/');
  }

  onHandleGoForward = () => {
    this.props.history.goForward();
  }

  render() {
    return (
      <p>
        isExact - {this.props.match.isExact} <br/>
        path - {this.props.match.path} <br/>
        params.id - {this.props.match.params.id} <br/>
        url - {this.props.match.url} <br/>

        <Button color="primary" onClick={this.onHandleBack}>Back</Button><br/>
        <Button onClick={this.onHandleGoHome}>Home with Router</Button><br/>
        <Button onClick={this.onHandleGoForward}>Go Forward</Button><br/>
      </p>
    );
  }
}
