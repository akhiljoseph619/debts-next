import React from "react";

export default function PreLoader() {
  return (
    <>
      <div class="loader-overlay">
        <div class="loader-cover">
          <div class="logo">
            <img src="images/loader.png" alt="Loader" />
          </div>
          <div class="loader-txt">Loading</div>
        </div>
      </div>
    </>
  );
}
