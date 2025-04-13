import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({pricingPromise}) => {
    const pricingData=use(pricingPromise)
    console.log(pricingData);
    return (
        <div>
            <h2 className='mt-16 text-5xl text-blue-600'>Get Our Membership</h2>
            <div className=' md:grid gap-10 md:grid-cols-3'>
                {
                    pricingData.map(pricing=><PricingCard pricing={pricing}
                    key={pricing.id}
                    ></PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;