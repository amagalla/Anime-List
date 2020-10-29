import React, { useState, useEffect } from 'react';
import OutputShow from './OutputShow';

const ShowList = () => {
  const [show, setShow] = useState([]);
  const [postShow, setPostShow] = useState('');

  useEffect(() => {
    fetch('/getShow')
      .then((res) => res.json())
      .then((res) => setShow(res));
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(postShow);
    useEffect(() => {
      fetch('/postShow', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type:': 'application/json',
        },
        body: JSON.stringify(postShow),
      });
    });
  };

  return (
    <div className="anime-list">
      {show &&
        show.map((element, index) => (
          <OutputShow key={index} index={index} showData={element} />
        ))}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="input"
          placeholder="Add Anime Show"
          // value={postShow}
          onChange={(e) => setPostShow(e.target.value)}
        />
      </form>
    </div>
  );
};

export default ShowList;

// const handleSubmit = (e) => {
//   e.preventDefault();
//   if (!value) return;
//   addShow(value);
//   setValue('');
// };
