import React from 'react';
import './Animation.css';

const Animation = () => {
  return (
    <section id="animation" className="animation-section">
      <h2 className = "title-animation">My Animations</h2>
      <div className="animation-gallery">
        <div className="animation-item">
          <video
            className="animation-video"
            controls
            loop
            muted
            src="videos/animation1.mp4"
          />
          <p>Sewing business</p>
        </div>
        <div className="animation-item">
          <video
            className="animation-video"
            controls
            loop
            muted
            src="path_to_your_animation_video_2.mp4"
          />
          <p>Animation 2 Description</p>
        </div>
        {/* Puedes agregar más animaciones aquí */}
      </div>
    </section>
  );
};

export default Animation;
