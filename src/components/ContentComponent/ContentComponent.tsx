import * as React from 'react';
import './content-component.css';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';

export interface ContentComponentProps {
  kindergartens: Kindergarten[];
}

export interface Kindergarten {
  id: number;
  name: string;
  adress: string;
  isPrivate: boolean;
}

const kindApi: Kindergarten[] = [
  {id: 0, name: 'Centro', adress: 'gedimino g. 9', isPrivate: true},
  {id: 1, name: 'Pakrascio', adress: 'kaimo g. 69', isPrivate: false}
];

export class ContentComponent extends React.Component<ContentComponentProps, {}> {
  renderKindergartenList() {
    // create rows in table
    const kindList = kindApi.map((kin, idx, aaa) => {
      return (
        <tr key={idx}>
          <th scope="row">{idx + 1}</th>
          <td><Link to={`gardens/${kin.id}`}>{kin.name}</Link></td>
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
            <th>Type</th>
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
