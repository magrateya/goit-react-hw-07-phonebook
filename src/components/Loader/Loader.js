import React from 'react';

import Loader from 'react-loader-spinner';

export default class LoaderRings extends React.Component {
  render() {
    return (
      <Loader
        type="Bars"
        color="#00BFFF"
        height={30}
        width={30}
        timeout={2000}
      />
    );
  }
}
