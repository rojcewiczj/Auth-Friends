import React from 'react';
import Loader from 'react-loader-spinner';

function Loading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return (<Component {...props} />);
    return (
        <Loader type="Puff" color="#204963" height="60" width="60" />
        );
  }
}
export default Loading;