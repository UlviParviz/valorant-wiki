import React from "react";
import ReactLoading from "react-loading";

const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <ReactLoading type="bubbles" color="#000000" height={100} width={100} />
    </div>
  );
};

export default Loader;
