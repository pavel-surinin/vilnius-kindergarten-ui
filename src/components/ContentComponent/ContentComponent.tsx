import * as React from 'react';
import './content-component.css';
import { Table } from 'reactstrap';

export interface ContentComponentProps {
  kindergartens: Kindergarten[];
}

export interface Kindergarten {
  id: number;
  name: string;
  adress: string;
  isPrivate: boolean;
}

export class ContentComponent extends React.Component<ContentComponentProps, {}> {
  renderKindergartenList() {
    // create rows in table
    const kindList = this.props.kindergartens.map((kin, idx, aaa) => {
      return (
        <tr key={idx}>
          <th scope="row">{idx}</th>
          <td>{kin.name}</td>
          <td>{kin.adress}</td>
          <td>{kin.isPrivate ? 'private' : 'public'}</td>
        </tr>
      );
    });
    // return table
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Addres</th>
            <th>isPrivate</th>
          </tr>
        </thead>
        <tbody>
          {kindList}
        </tbody>
      </Table>
    );
  }

  render() {
    return (
      <div>
        {this.renderKindergartenList()}
      </div>);
  }
}
