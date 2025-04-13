import React from 'react';

const PricingCard = ({pricing}) => {
    console.log(pricing)
    return (
        <div>
            <div className="mt-8 card md:w-96 bg-blue-300 shadow-sm">
  <div className="card-body">
  <div>
        <img className='w-40  rounded-lg' src={pricing.image} alt="" />
    </div>
    <div className="flex gap-8 justify-between">
      <h2 className="text-3xl font-bold text-blue-600">{pricing.name}</h2>
      <span className="text-xl">{pricing.price}</span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{pricing.features[0]}</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{pricing.features[1]}</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{pricing.features[2]}</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{pricing.features[3]}</span>
      </li>
      
    </ul>
    <div className="mt-6">
      <button className="btn  btn-block text-lg font-bold text-blue-600">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default PricingCard;