import React from 'react';
import { Link } from 'react-router-dom';

export class PageNotFound extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="page-not-found">
        <h1>404</h1>
        <p>This page does not exist</p>
        <p>Now <Link to="/">go home</Link></p>
      </div>
    );
  }
}

export default PageNotFound;