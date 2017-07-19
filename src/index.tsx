import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { ContentComponent, Kindergarten } from './components/ContentComponent/ContentComponent';

const kindList: Kindergarten[] = [
  {id: 1, name: 'Centro', adress: 'gedimino g. 9', isPrivate: true},
  {id: 2, name: 'Pakrascio', adress: 'kaimo g. 69', isPrivate: false}
];

ReactDOM.render(
  <App>
    <ContentComponent kindergartens={kindList}/>
  </App>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
