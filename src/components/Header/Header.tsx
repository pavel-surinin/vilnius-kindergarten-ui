import * as React from 'react';
import './Header.css';

interface HeaderProps {
  title: string;
  subTitle?: string;
}

export class Header extends React.Component<HeaderProps, {}> {

  static defaultProps = {
    subTitle: 'optional sub title'
  };

  render() {
    return(
      <div  className="App-header">
        <h1>{this.props.title}</h1>
        {this.props.subTitle && <h3>{this.props.subTitle}</h3>}
      </div>
    );
  }
}
