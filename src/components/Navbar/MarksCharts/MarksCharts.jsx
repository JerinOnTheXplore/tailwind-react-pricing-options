import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksCharts = ({marksPromise}) => {
    const marksDataRes=use(marksPromise);
    const marksData=marksDataRes.data;
    console.log(marksData);
    // data processing for the chart
    const marksChartData=marksData.map(studentData=>{
        const student={
            id:studentData.id,
            name:studentData.name,
            physics:studentData.marks.physics,
            chemistry:studentData.marks.chemistry,
            math:studentData.marks.math
        }
        const avg=(studentData.physics+studentData.chemistry+studentData.math)/3;
        student.avg=avg;
        return student;
    })
    console.log(marksChartData);
    return (
        <div className='mt-56'>
          <BarChart width={500} height={300} data={marksChartData}>
            <XAxis dataKey=",name"></XAxis>
            <YAxis></YAxis>
            <Bar dataKey="chemistry" fill='skyBlue'></Bar>
        </BarChart>  
        </div>
    );
};

export default MarksCharts;