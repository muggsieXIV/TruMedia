import React, { useEffect, useState } from "react";
import Loading from "./Loading.jsx";

const PlayerStats = (props) => {

    const pid = props.pid;

    const [ stats, setStats ] = useState(null);
    const [ statsLoaded, setStatsLoaded ] = useState(false);

    useEffect(()=>{
        fetch(`https://project.trumedianetworks.com/api/nfl/player/` + pid, {
        method: 'GET',
        mode: 'cors',
        // headers: { 'Content-Type': 'application/json', 'tempToken': `${token}`, },
        headers: { 'Content-Type': 'application/json', 'tempToken': 'e5deccc5-1216-4a4a-bfe1-d3cc52c91670'},

        })
        .then( (res) => res.json() )
        .then( res => {
            setStats(res);
            setStatsLoaded(true);
        });
    });

    if(statsLoaded === true){
        return (
            <div className="player-stats">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Season</th>
                            <th>Week</th>
                            <th>Game Date</th>
                            <th>Team</th>
                            <th>Opponent</th>
                            <th>Att</th>
                            <th>Cmp</th>
                            <th>Sack</th>
                            <th>Int</th>
                            <th>PsYds</th>
                            <th>PsTD</th>
                            <th>Rush</th>
                            <th>RshYrds</th>
                            <th>RshTD</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(stats).map(([key, value]) => (
                            <tr key={key}>
                                <td>{ value.seasonYear }</td>
                                <td>{ value.week }</td>
                                <td>{ value.gameDate }</td>
                                <td><img src={ value.teamImage } alt={ value.team } /></td>
                                <td><img src={value.opponentImage} alt={ value.opponent } /></td>
                                <td>{ value.Att}</td>
                                <td>{ value.Cmp }</td>
                                <td>{ value.Sack }</td>
                                <td>{ value.Int }</td>
                                <td>{ value.PsYds }</td>
                                <td>{ value.PsTD }</td>
                                <td>{ value.Rush }</td>
                                <td>{ value.RshYds }</td>
                                <td>{ value.RshTD }</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    } else {
        return (
            <Loading />
        )
    }
}

export default PlayerStats;
