const request = require('request-promise-native');

const fetchMyIP = function() {
  return request("https://api.ipify.org?format=json");
};
const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip;
  return request(`http://ipwho.is/${ip}`)
}
const fetchISSFlyOverTimes = function(body) {
  const {latitude, longitude} = JSON.parse(body);
  return request(`https://iss-flyover.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`);
}
const convertedTimes = function(passTimes) {
  for (const time of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(time.risetime);
    const duration = time.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
}
const nextISSTimesForMyLocation = function() { 
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then(body => {
      const { response } = JSON.parse(body);
      return response;
    });
}



module.exports = { nextISSTimesForMyLocation, convertedTimes };