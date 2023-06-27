import { Carousel } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import EachPhase from './EachPhase';

const Slider = () => {
  const [phases, setPhases] = useState([]);

  useEffect(() => {
    fetch('phases.json')
    .then(res => res.json())
    .then(data => setPhases(data))
  }, [])


  return (
    <section className="bg-gray-300">
      <Carousel className="max-w-[992px] mx-auto">
        {
          phases.map(phase =>
            <EachPhase key={phase.id} eachPhase={phase} />
          )
        }
      </Carousel>
    </section>
  );
};

export default Slider;