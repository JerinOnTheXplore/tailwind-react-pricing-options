
import { Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PricingOptions from './components/Navbar/PricingOptions/PricingOptions'
import PricingCard from './components/Navbar/PricingCard/PricingCard';
const pricingPromise= fetch('pricingOptions.json').then(res=>res.json());
function App() {
  

  return (
    <>
      
      <header>
      <Navbar></Navbar>
      </header>
      <main className='px-10 py-5 bg-blue-200'>
        <Suspense fallback={<span className="loading loading-spinner text-neutral"></span>}>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>
        
      </main>
      
    </>
  )
}

export default App
