import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Garden as GardenInterface } from '../../model/models';
import axios from 'axios';
import './style.css';
import * as moment from 'moment';

interface GardenProps extends RouteComponentProps<{id: string}> {
}
interface GardenState {
  isLoading: boolean;
  info: GardenInterface;
}

export class Garden extends React.Component<GardenProps, GardenState> {
  constructor(props: GardenProps) {
    super(props);
    this.state = ({
      isLoading: true,
      info: {
        'address': '',
        'buildDate': new Date(),
        'elderate': '',
        'id': 0,
        'idFromSource': 0,
        'label': '',
        'schoolType': ''
      }
    });
  }

componentWillMount() {
  axios
    .get(`https://safe-mesa-80356.herokuapp.com/api/garden/${this.props.match.params.id}`)
    .then(response => {
      this.setState({
        isLoading: false,
        info: response.data
      });
    })
    .catch(err => { throw new ReferenceError('Failed to fetch data'); } );
}

  onHandleBack = () => {
    this.props.history.goBack();
  }

  renderInfoRow = (label: string, value: Date | string | number | undefined) => {
    if (value) {
        return (
          <span className="row-element">
            {label} - {value}
          </span>
        );
    } else {
      return <span>&nbsp;</span>;
    }

  }

  render() {
    const { label, phone, email, www, groups, buildDate } = this.state.info;
    return this.state.isLoading ? <span>Loading...</span> :
     (
      <div>
       <h2>{label}</h2>
       <div>
         {this.renderInfoRow('Pastatymo metai', moment(buildDate).format('LL'))}
         {this.renderInfoRow('telefonas', phone)}
         {this.renderInfoRow('el. pastas', email)}
         {this.renderInfoRow('www', www)}
         {this.renderInfoRow('grupiu kiekis', groups && groups.length)}
       </div>
      </div>
    );
  }
}
