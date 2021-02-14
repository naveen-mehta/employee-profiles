import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import '../../Stylesheets/loading.css';

export default function CircularIndeterminate() {

  return (
    <div className="loading">
      <CircularProgress color="inherit"/>
    </div>
  );
}
