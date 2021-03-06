const session = "";
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

function displayResults(responseJson) {
  console.log(responseJson);
}
function getSessionId() {
  console.log("`getSessionId` ran");
  const url = `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/v1.0`;
  const options = {
    method: "POST",
    headers: new Headers({
      "X-RapidAPI-Key": skyScannerApiKey,
      "X-RapidAPI-Host":
        "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
      "Content-Type": "application/x-www-form-urlencoded"
    }),
    // Static send will change values dynamically later Not sure if obj properties have to be unique
    body: sendParams.join("&")
  };
  fetch(url, options)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson)) // Change this to extract the session ID
    .catch(error => alert(error.message));
  return sessionId;
}
function getFlightResults() {
  const url = `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/v1.0`;
  const options = {
    headers: new Headers({
      "X-RapidAPI-Key": skyScannerApiKey
    })
  };
  return fetch(url, options)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson))
    .catch(error => alert(error.message));
}
session = getSessionId();
getFlightResults(session);
// "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/uk2/v1.0/${session}?pageIndex=0&pageSize=10")
// responseJson.location gives big location feed that to a regEx
// (\/[0-9].*|$)
