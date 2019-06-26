import React from 'react';
import { Router, Route } from 'react-router-dom';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import Charts from './streams/Charts';
import Header from './Header';
import history from '../history'

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/edit/:id" component={StreamEdit} />
          <Route path="/streams/delete/:id" component={StreamDelete} />

          <Route path="/streams/charts" component={Charts} />
        </div>
      </Router>
    </div>
  );
};

export default App;
