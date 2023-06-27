

import ReactPlayer from "react-player";
import '../App.css'

const EachStory = (eachVideo) => {
  // console.log(eachVideo.eachVideo);
  const { video, title, description } = eachVideo.eachVideo;

  return (
    <div className='flex flex-col md:flex-row wrapper-container'>
      <div className="player-wrapper">
        <ReactPlayer url={video} className='react-player' />
      </div>
      <div className="flex flex-col justify-center w-1/4 bg-secondary pl-5 pr-2 py-8 text-white">
        <h4 className="font-semibold gg">
          {title}
        </h4 >
        <p className='pt-4'>{description}</p>
      </div>
    </div>
  );
};

export default EachStory;