import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[10%] md:pt-[20%] px-10 absolute bg-gradient-to-r from-black text-white w-screen aspect-video">
      <h1 className="font-bold text-md md:text-5xl">{title}</h1>
      <p className="my-4 hidden md:inline-block  md:w-1/3 text-justify text-lg">
        {overview}
      </p>
      <div className="mt-4 md:mt-0">
        <button className="bg-white text-black py-2 px-4 mx-4 rounded-lg">
          ▶ Play
        </button>
        <button className="bg-gray-700 text-white p-2 mx-4 rounded-lg bg-opacity-35">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
