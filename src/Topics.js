import React from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import Topic from './Topic'

const Topics = ({ match }) => (
  <div>
    <h2>Welcome to Hope One Source</h2>
    <ul>
      <button>
        <Link to={`${match.url}/rendering`}>Go to Hope One Source</Link>
      </button>
    </ul>
    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route exact path={match.url} render={() => <h3>Please select a topic.</h3>}
    />
  </div>
)



export default Topics
