"use client";
import React, { useRef, useState } from "react";

const CameraTest = () => {
  const videoRef = useRef(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      videoRef.current.play(); // Start playing the video
    } catch (error) {
      console.error("Error accessing the camera:", error);
    }
  };

  const captureImage = () => {
    if (videoRef.current.readyState !== videoRef.current.HAVE_ENOUGH_DATA) {
      console.error("Video not ready");
      return;
    }
    videoRef.current.pause();
  };

  const toggleFullScreen = () => {
    if (!isFullScreen) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.mozRequestFullScreen) {
        /* Firefox */
        videoRef.current.mozRequestFullScreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        /* Chrome, Safari & Opera */
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        /* IE/Edge */
        videoRef.current.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        // document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className="max-w-lg mx-auto my-8 p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl mb-4">Camera Test</h1>
      <div className="flex justify-between mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={startCamera}
        >
          Start Camera
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={captureImage}
        >
          Capture Image
        </button>
        <button
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={toggleFullScreen}
        >
          {isFullScreen ? "Exit Fullscreen" : "Enter Fullscreen"}
        </button>
      </div>
      <video
        ref={videoRef}
        className="w-full rounded-lg shadow-md"
        width="400"
        height="300"
        onLoadedMetadata={() => {
          console.log("Video metadata loaded");
        }}
      ></video>
    </div>
  );
};

export default CameraTest;
