import React from 'react';
import VideoCard from './VideoCard';

// Implemented Higher order Component eg - Ad

const AdVideoCard = ({info}) => {
  return (
    <div className="p-1 m-1 border border-red-900">
      <VideoCard info={info}/>
    </div>
  );
};

export default AdVideoCard;