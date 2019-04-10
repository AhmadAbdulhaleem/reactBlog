import React from 'react';

const Error = ({ allErrors }) => {
  return (
    <div>
      {allErrors.username && <div className="alert alert-danger">{allErrors.username}</div>}
    </div>
  );
};

export default Error;
