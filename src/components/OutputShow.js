import React, { useState, useEffect } from 'react';

const OutputShow = ({ showData, index }) => {
  return <div className="showOutput">{showData.show}</div>;
};

export default OutputShow;
