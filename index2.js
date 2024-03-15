const { nextISSTimesForMyLocation, convertedTimes } = require('./iss_promised');


nextISSTimesForMyLocation()
  .then((passTimes) => {
    convertedTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });