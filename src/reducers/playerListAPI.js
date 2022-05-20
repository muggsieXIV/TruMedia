const getPlayersList = (token) => {
    console.log('Player List Temp Token: ' + token);
    var players = null;
    fetch(`https://project.trumedianetworks.com/api/nfl/players`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'tempToken': `${token}`, },
    })
    .then( (res) => res.json() )
    .then( res => {
        players = res;
        console.log('player list: ' + players);
        return players;
    });
}

export default getPlayersList;

// // https://project.trumedianetworks.com/api/nfl/players
// // -H 'accept: application/json' \
// // -H `tempToken: ${apiToken}'

// /* Response:
// [
//     {
//       "playerId": 2543477,
//       "fullName": "Blake Bortles",
//       "playerImage": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BOR650964.png",
//       "teamImage": "https://static.trumedianetworks.com/images/nfl/teams/2250.png"
//     },
//     {
//       "playerId": 2543499,
//       "fullName": "Derek Carr",
//       "playerImage": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CAR358797.png",
//       "teamImage": "https://static.trumedianetworks.com/images/nfl/teams/2520.png"
//     },
//     {
//       "playerId": 2560800,
//       "fullName": "Baker Mayfield",
//       "playerImage": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/MAY483453.png",
//       "teamImage": "https://static.trumedianetworks.com/images/nfl/teams/1050.png"
//     }
//   ]
// */

