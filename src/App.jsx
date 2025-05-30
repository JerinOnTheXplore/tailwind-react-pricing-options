
import { Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PricingOptions from './components/Navbar/PricingOptions/PricingOptions'
import PricingCard from './components/Navbar/PricingCard/PricingCard';
import ResultsChart from './components/Navbar/ResultsChart/ResultsChart';
import axios from 'axios';
import MarksCharts from './components/Navbar/MarksCharts/MarksCharts';
const pricingPromise= fetch('pricingOptions.json').then(res=>res.json());
const marksPromise=axios.get('marksData.json');
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
        <Suspense fallback={<span className="loading loading-spinner text-neutral"></span>}>
          <MarksCharts marksPromise={marksPromise}></MarksCharts>
        </Suspense>
        <ResultsChart></ResultsChart>
      </main>
      
    </>
  )
}

export default App
