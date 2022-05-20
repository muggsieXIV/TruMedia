import React, { useEffect, useState } from 'react';
import Loading from "./Loading.jsx";
import Chart from 'react-google-charts'

const BreakDown = (props) => {
    const pid = props.pid;
    const [ stats, setStats ] = useState(null);
    const [ breakdownLoaded, setBreakdownLoaded ] = useState(false);

    const LineData = stats;

    const LineChartOptions = {
        hAxis: {
            title: 'Week',
        },
        vAxis: {
            title: 'Total',
        },
        series: {
            1: { curveType: 'function' },
        },
    }

    useEffect(()=>{
        fetch(`https://project.trumedianetworks.com/api/nfl/player/` + pid, {
        method: 'GET',
        mode: 'cors',
        // headers: { 'Content-Type': 'application/json', 'tempToken': `${token}`, },
        headers: { 'Content-Type': 'application/json', 'tempToken': 'e5deccc5-1216-4a4a-bfe1-d3cc52c91670'},
        })
        .then( (res) => res.json() )
        .then( res => {
            const newStats = []
            newStats.push(['x', 'Att', 'Cmp', 'Int', 'PsTD', 'RshTD', 'Sacks']);
            for (let value of Object.values(res)) {
                newStats.push([value.week, value.Att, value.Cmp, value.Int, value.PsTD, value.RshTD, value.Sack]);
            }
            setStats(newStats);

            console.log(newStats);
            setBreakdownLoaded(true);
        });
    });

    if(breakdownLoaded === true ) {
        return (
            <div>
                <div className="container mt-5">
                    <Chart
                        width={'auto'}
                        height={'600px'}
                        chartType="LineChart"
                        loader={<div>Loading Chart</div>}
                        data={LineData}
                        options={LineChartOptions}
                        rootProps={{ 'data-testid': '4' }}
                    />
                </div>
            </div>
        )
    } else {
        <Loading />
    }
}

export default BreakDown;
