import * as React from 'react';
import './content-component.css';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { store } from '../../store/store';

export interface ContentComponentProps {
  kindergartens: Kindergarten[];
}

export interface Kindergarten {
  id: number;
  label: string;
  address: string;
  buildDate: number;
  elderate: string;
  email: string;
  phone: string;
  schoolType: string;
  www: string;
  idFromSource: number;
}

export class ContentComponent extends React.Component<ContentComponentProps, {gardens: Kindergarten[]}> {
  constructor(props: ContentComponentProps) {
    super(props);
    this.state = {gardens: []};
  }

  componentWillMount() {
    this.setState({gardens: store.getState().gardens});
    // axios
    // .get('https://safe-mesa-80356.herokuapp.com/api/garden')
    // .then(res => this.setState({gardens: res.data}))
    // .catch(err => {throw new ReferenceError('Failed to load gardens data'); });
  }

  renderKindergartenList() {
    // create rows in table
    const kindList = this.props.kindergartens
      // .slice(0, 5)
      .map((kin, idx, aaa) => {
      return (
        <tr key={idx}>
          <th scope="row">{idx + 1}</th>
          <td><Link to={`gardens/${kin.id}`}>{kin.label}</Link></td>
          <td>{kin.address}</td>
          <td>{kin.elderate}</td>
        </tr>
      );
    });
    // return tab
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
    return !this.state.gardens ? <div>Loading...</div> : (
      <div>
        {this.renderKindergartenList()}
      </div>);
  }
}
