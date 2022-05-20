import './index.css';
import './App.css';
import { useEffect, useState } from 'react';

// Reducers 
// import getToken from './reducers/tokenAPI.js';
// import getPlayersList from './reducers/playerListAPI.js';

// Views
import Loading from './components/Loading.jsx';
import NavBar from './components/NavBar.jsx';
import PlayerStats from './components/PlayerStats.jsx';
import BreakDown from './components/BreakDown.jsx';


function App() {
  const apiKey = 'fa718609-36e0-4593-b802-55d9d278b2b5';
  const [ token, setToken ] = useState(null);
  const [ playerList, setPlayerList ] = useState(null);
  const [ pid, setPid ] = useState(null);
  const [ showPS, setShowPS ] = useState(false);
  const [ showStats, setShowStats ] = useState(false);
  const [ showBreakDown, setShowBreakDown ] = useState(false);
  const [ loaded, setLoaded ] = useState(false);

  const hideStats = () => {
    setShowPS(false);
    setPid(null);
  }

  const setPlayers = (props) => {
    fetch(`https://project.trumedianetworks.com/api/nfl/players`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'tempToken': `${token}`, },
        // headers: { 'Content-Type': 'application/json', 'tempToken': 'e5deccc5-1216-4a4a-bfe1-d3cc52c91670'},
    })
    .then( (res) => res.json() )
    .then( res => {
      setPlayerList(res);
      setLoaded(true);
    });
  }

  const showPlyrStats = (pid) => {
    setShowBreakDown(false);
    setShowStats(true);
  }

  const showBD = (pid) => {
    setShowStats(false);
    setShowBreakDown(true);
  }

  const selectPlayer = (pid) => {
    setPid(pid);
    setShowStats(true);
    setShowBreakDown(false);
    setShowPS(true);
  };

  useEffect(()=>{
    let token = fetch(`https://project.trumedianetworks.com/api/token`, {
        method: 'GET',
        // headers: { 'Content-Type': 'application/json', 'apikey': `${apiKey}`, },
        headers: { 'Content-Type': 'application/json', 'apikey': 'fa718609-36e0-4593-b802-55d9d278b2b5'},
    })
    .then( (res) => res.json() )
    .then( (res) => {
      setToken(res.token);
      console.log(token);
    });
    setPlayers(token);
  }, [])

  if ( !loaded ) {
    return (
      <div className="App">
        <NavBar />
        <Loading className="loading-page" />
      </div>
    );
  } else {
    return (
      <div className="App">
        <NavBar />
        <section className="players-list">
          {Object.entries(playerList).map(([key, value]) => (
              <div className='player-card' key={key}>
                  <img className="team-logo" src={value.teamImage} alt="Team" />
                  <h3>{value.fullName}</h3>
                  <img className="player-img" src={value.playerImage} alt={value.fullName} />
                  <button className="btn btn-secondary mt-2" onClick={()=>selectPlayer(value.playerId)}>View Stats</button>
              </div>
          ))} 
        </section>
        { showPS === true && (
          <div>
            <button className="btn btn-primary m-1" onClick={()=>showPlyrStats()}>Stats</button>
            <button className="btn btn-warning m-1" onClick={()=>showBD()}>BreakDown</button>
            <button className="btn btn-danger m-1" onClick={()=>hideStats()}>Hide</button>
            <section>
              {showStats === true && (
                <PlayerStats pid={pid} />
              )}
              {showBreakDown === true && (
                <BreakDown pid={pid} />
              )}
            </section>
          </div>
        )}
      </div>
    );
  } 
}

export default App;