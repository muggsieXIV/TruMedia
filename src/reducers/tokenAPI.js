// Needs a function to handle expired tokens 
// import { apiKey } from './config.js';

const getToken = () => {
    let token = fetch(`https://project.trumedianetworks.com/api/token`, {
        method: 'GET',
        // headers: { 'Content-Type': 'application/json', 'apikey': `${apiKey}`, },
        headers: { 'Content-Type': 'application/json', 'apikey': 'fa718609-36e0-4593-b802-55d9d278b2b5'},
    })
    .then( (res) => res.json() )
    .then( (res) => {
        token = res.token;
        return token;
    });
}

export default getToken;
