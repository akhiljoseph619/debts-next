import React from 'react';

export default function PreLoader() {
  return (
    <>
      <div className="loader-overlay">
        <div className="loader-cover">
          <div className="logo">
            <img src="images/loader.png" alt="Loader" />
          </div>
          <div className="loader-txt">Loading</div>
        </div>
      </div>
    </>
  );
}
