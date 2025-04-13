import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';
const resultData=[
    {
      "id": 1,
      "name": "Abdullah Hossain",
      "physics": 87,
      "chemistry": 78,
      "math": 91
    },
    {
      "id": 2,
      "name": "Ayesha Siddiqua",
      "physics": 75,
      "chemistry": 83,
      "math": 80
    },
    {
      "id": 3,
      "name": "Mohammad Fahim",
      "physics": 92,
      "chemistry": 88,
      "math": 95
    },
    {
      "id": 4,
      "name": "Fatima Akter",
      "physics": 69,
      "chemistry": 72,
      "math": 77
    },
    {
      "id": 5,
      "name": "Yusuf Karim",
      "physics": 85,
      "chemistry": 80,
      "math": 89
    },
    {
      "id": 6,
      "name": "Sumaiya Rahman",
      "physics": 74,
      "chemistry": 79,
      "math": 70
    },
    {
      "id": 7,
      "name": "Hamza Mahmud",
      "physics": 90,
      "chemistry": 91,
      "math": 94
    },
    {
      "id": 8,
      "name": "Mariam Jannat",
      "physics": 66,
      "chemistry": 71,
      "math": 69
    },
    {
      "id": 9,
      "name": "Imran Khalil",
      "physics": 80,
      "chemistry": 76,
      "math": 85
    },
    {
      "id": 10,
      "name": "Zaynab Sultana",
      "physics": 82,
      "chemistry": 84,
      "math": 87
    }
  ]
  
const ResultsChart = () => {
    return (
        <div className='mt-32'>
           <LineChart width={800} height={400} data={resultData}>
            <XAxis dataKey={'name'}></XAxis>
            <YAxis></YAxis>
            <Line dataKey="math"></Line>
            <Line dataKey={'chemistry'} stroke='purple'></Line>
           </LineChart> 
        </div>
    );
};

export default ResultsChart;