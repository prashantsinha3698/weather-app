export default function getLocation() {
  navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    console.log(`Lat: ${lat}, Long: ${long}`);
  });
}
