import { useEffect, useState } from 'react';

const Phases = () => {
  const [phases, setPhases] = useState([]);
  
  useEffect(() => {
    fetch('phases.json')
    .then(res => res.json())
    .then(data => setPhases(data))
  }, [])

  // console.log(phases[0]);
  
  const [activeDescription, setActiveDescription] = useState(phases[0]?.description);

  const handleClick = description => {
    setActiveDescription(prevDescription => {
      if (prevDescription === description) {
        return prevDescription; // Keep the current description if clicked on the same image again
      } else {
        return description; // Set the new description if clicked on a different image
      }
    });
  }

  return (
    <section className="bg-gray-200">
      <div className="max-w-[992px] mx-auto flex cursor-pointer gap-x-8 justify-around text-center text-lg text-gray-600 pt-5">
        {
          phases.map(phase =>
            <>
              <h3 className="font-semibold basis-1/4 border-b-4 pb-2 hover:text-secondary hover:border-secondary" onClick={() => handleClick(phase.description)}>
                {phase.title}  
              </h3>  
            </>
          )
        }
      </div>

      <div className="max-w-[992px] mx-auto flex justify-around text-center text-lg cursor-pointer text-gray-600 md:gap-x-1 lg:gap-x-8 md:px-1 lg:px-4 py-8 items-center">

        <p className="text-justify">
          {activeDescription}
        </p>
        
        {
          phases.map(phase =>
            <>
                
              <img className="h-full object-cover" src={phase.thumbnail} alt={phase.title} onClick={() => handleClick(phase.description)} />
            </>
          )
        }
        
      </div>
    </section>
  );
};

export default Phases;