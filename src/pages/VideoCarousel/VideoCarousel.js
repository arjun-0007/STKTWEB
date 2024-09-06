// src/components/VideoCarousel.js

import React from 'react';
import Slider from 'react-slick';
import './VideoCarousel.css'; // Import custom styles if needed

const videos = [
  { src: 'https://www.youtube.com/embed/lhnrvhSVjFw?si=hVSJlFcZcv1q0Egd', title: 'Video 1' },
  { src: 'https://www.youtube.com/embed/LKVwsdkiJw4?si=VouUfBhRtgkmYNaE', title: 'Video 2' },
  { src: 'https://www.youtube.com/embed/lhnrvhSVjFw?si=hVSJlFcZcv1q0Egd', title: 'Video 3' },
];

const VideoCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    marginRight:20,
    slidesToShow:1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div className="video-carousel">
      <Slider {...settings}>
        {videos.map((video, index) => (
          <div key={index} className="video-slide">
            <iframe
              width="100%"
              src={video.src}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideoCarousel;
