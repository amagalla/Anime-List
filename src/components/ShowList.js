import React, { useState, useEffect } from 'react';
// import OutputShow from './OutputShow';

const OutputShow = ({ showData, index, deleteShow }) => {
  return (
    <div className="showOutput">
      {showData.show}
      <div>
        <button
          className="delete-button"
          onClick={() => deleteShow(index, showData._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

const ShowList = () => {
  const [getShow, setgetShow] = useState([]);
  const [postShow, setPostShow] = useState({ show: '' });

  const { show } = postShow;

  useEffect(() => {
    fetch('/getShow')
      .then((res) => res.json())
      .then((res) => setgetShow(res));
  });

  const onSubmit = (e) => {
    e.preventDefault();
    // useEffect(() => {
    fetch('/postShow', {
      method: 'POST',
      headers: {
        // Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postShow),
    })
      .then((res) => res.json())
      .then((data) => setPostShow(data))
      .catch((err) => console.log(err));
    // });
  };

  const deleteShow = (index, id) => {
    fetch('/deleteShow/' + id, {
      method: 'DELETE',
    })
      .then((res) => res.json()) // or res.json()
      .then((res) => console.log(res));
  };

  return (
    <div className="anime-list">
      {getShow &&
        getShow.map((element, index) => (
          <OutputShow
            key={index}
            index={index}
            showData={element}
            deleteShow={deleteShow}
          />
        ))}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="input"
          placeholder="Add Anime Show"
          value={show || ''}
          onChange={(e) => setPostShow({ ...postShow, show: e.target.value })}
        />
      </form>
    </div>
  );
};

export default ShowList;
