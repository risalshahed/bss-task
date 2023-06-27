
const EachPhase = eachPhase => {
  const { title, thumbnail, description } = eachPhase.eachPhase;

  return (
    <div className='flex flex-col items-center'>
      <h3 className="w-full bg-gray-900 text-center text-white font-semibold border-b-4 py-2 hover:text-secondary hover:border-secondary">{title}</h3>
      <p className="text-justify px-4 py-10">
        {description}
      </p>
      <img className="h-full object-cover" src={thumbnail} alt={title} />
    </div>
  );
};

export default EachPhase;