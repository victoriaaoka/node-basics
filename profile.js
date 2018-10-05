//require https
const https = require('https');

//function to print message to console.
function printMessage(userName, badgeCount, points){
  const message = `${userName} has ${badgeCount} total badge(s) and ${points} points in JavaScript.`;
  console.log(message);
}

function getProfile(userName){
  //connect to the Treehouse API URL(https://teamtreehouse.com/victoriaaoka.json)
  const request = https.get(`https://teamtreehouse.com/${userName}.json`, response => {
    let body = '';
    //Read the data
    response.on('data', data => {
      body += data.toString();
    });
    
    response.on('end', () => {
      //parse the data
      const profile = JSON.parse(body);
      //print the data
      printMessage(userName, profile.badges.length, profile.points.JavaScript);
    });
    
    //print the data
  });
}


module.exports.get = getProfile;

