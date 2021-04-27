import React from 'react';
import {Doughnut} from 'react-chartjs-2';

// look into state for chartInfo

function Chart(props){

    const chartInfo = {
        labels: ['Completed', 'Remaining'],
        datasets: [{
            label: 'Best chart',
            backgroundColor: [
                'green',
                'red'
            ],
            data: [props.percentComplete, 100 - props.percentComplete]
        }]
    }

        return (
            <div className="chart">
                <Doughnut data={chartInfo}/>
            </div>
        )
}

export default Chart;