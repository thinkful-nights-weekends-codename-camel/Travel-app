let session = "";
const skyScannerApiKey = "5893fbc347mshff1a803ba0f0e96p17e955jsn4e5d5e99ecad";
const weatherApiKey = "";
const sendParams = [
  "inboundDate=2019-05-10",
  "cabinClass=business",
  "cabinClass=business",
  "children=0",
  "infants=0",
  "country=US",
  "currency=USD",
  "locale=en-US",
  "originPlace=PHL-sky",
  "destinationPlace=YVR-sky",
  "outboundDate=2019-05-01",
  "adults=1"
];
function getLocationString(sessionLocation) {
  const sessionId = sessionLocation.substr(
    sessionLocation.lastIndexOf("/") + 1
  );
  return sessionId;
}
function grabSessionId() {
  const url = `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/v1.0`;
  const options = {
    method: "POST",
    headers: new Headers({
      "X-RapidAPI-Host":
        "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
      "X-RapidAPI-Key": skyScannerApiKey,
      "Content-Type": "application/x-www-form-urlencoded"
    }),
    // Params for post request
    body: sendParams.join("&")
  };
  fetch(url, options).then(response => {
    const sessionId = getLocationString(response.headers.get("location"));
    return grabSessionId(sessionId);
  });
  // .then(responseJson => console.log(responseJson)) // Change this to extract the session ID
  // .catch(error => alert(error.message));
  // return sessionId;
}

function getFlightResults(sessionId) {
  const url = `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/v1.0/${sessionId}`;
  const options = {
    headers: new Headers({
      "X-RapidAPI-Key": skyScannerApiKey
    })
  };
  return fetch(url, options)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert(error.message));
}

function displayResults(responseJson) {
  console.log(responseJson);
}

grabSessionId();
// getFlightResults(session);
// "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/uk2/v1.0/${sessionId}?pageIndex=0&pageSize=10")
// responseJson.location gives big location feed that to a regEx
// (\/[0-9].*|$)
// var final = theURL.substr(theURL.lastIndexOf('/') + 1)
// const theUrl = "http://partners.api.skyscanner.net/apiservices/pricing/uk2/v1.0/1f09caf0-2818-4741-a943-e93f8d0d75fb"
// const sessionId = theUrl.substr(theUrl.lastIndexOf('/') + 1);
// sessionId
// const location = response.location
// const sessionId = location.substr(location.lastIndexOf('/') + 1) Might work. Have to make sure that the const
//location is correct
