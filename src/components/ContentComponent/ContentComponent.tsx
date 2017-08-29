import * as React from 'react';
import './content-component.css';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Garden } from '../../model/models';

export interface ContentComponentProps {
  kindergartens: Garden[];
}

interface ContentComponentState {
  isLoading: boolean;
  gardens: Garden[];
}

export class ContentComponent extends React.Component<ContentComponentProps, ContentComponentState> {
  constructor(props: ContentComponentProps) {
    super(props);

    this.state = {
      isLoading: true,
      gardens: []
    };
  }

  componentWillMount() {
    axios
      .get('https://safe-mesa-80356.herokuapp.com/api/garden')
      .then(response => {
          this.setState(
            {
              isLoading: false,
              gardens: response.data
            }
          );
    })
      .catch(err => { throw new ReferenceError('Failed to fetch data'); } );

    // axios
    // .get('https://safe-mesa-80356.herokuapp.com/api/garden')
    // .then(res => this.setState({gardens: res.data}))
    // .catch(err => {throw new ReferenceError('Failed to load gardens data'); });
  }

  renderKindergartenList() {
    // create rows in table
    const kindList = this.state.gardens
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
    return this.state.isLoading ? <div>Loading...</div> : (
      <div>
        {this.renderKindergartenList()}
      </div>
    );
  }
}
