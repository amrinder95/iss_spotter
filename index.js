const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');


fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP:' , ip);
});

fetchCoordsByIP("99.235.72.234", (error, data) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log("It worked! Returned coordinates:", data);
});

fetchISSFlyOverTimes({latitude: 43.7315479, longitude: -79.7624177}, (error, passTimes) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log("It worked! ISS Flyover times:", passTimes);
});