import { Carousel } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import EachStory from './EachStory';

const Stories = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('videos.json')
    .then(res => res.json())
    .then(data => setVideos(data))
  }, [])

  return (
    <section className="max-w-[992px] mx-auto pb-20">
        <div className="bg-gray-900 md:bg-white px-5 md:px-0 pt-10 md:pt-20 pb-3">
          <h3 className="text-3xl font-bold text-secondary pb-14">
            Clinical trial stories
          </h3>

          <p className="pb-10 text-justify text-gray-500 md:text-black">
            Each individual's clinical trial experience is personal to them. Hear what it's like to take part in a trial form different perspectives, including people's thoughts and feelings throughout the process, and any advice they have for those considering whether it might be an option for them.
          </p>
        </div>

        <Carousel
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 right-1/2 z-50 flex -translate-x-1/2 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "bg-red-900 w-8" : "bg-red-400 w-4"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          {
            videos.map(video =>
              <EachStory key={video.id} eachVideo={video} />
            )
          }
        </Carousel>

      </section>
  );
};

export default Stories;