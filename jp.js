// mkdir weather
//     cd weather
    // npx create-react-app weather
module.exports = {
      key: "{Your API Key Here}",
      base: "https://api.openweathermap.org/data/2.5/",
    };
module.exports = {
      key: "{Your API Key Here}",
      base: "https://api.openweathermap.org/data/2.5/",
    };
if (navigator.geolocation) {
        this.getPosition()
        .then((position) => {
          this.getWeather(position.coords.latitude, position.coords.longitude);
        });
    } else {
      alert("Geolocation not available");
    }
if (navigator.geolocation) {
        this.getPosition()
        .then((position) => {
          this.getWeather(position.coords.latitude, position.coords.longitude);
        })
        .catch((err) => {
          this.getWeather(28.67, 77.22);
          alert(
            "You have disabled location service."
          );
        });
    } else {
      alert("Geolocation not available");
    }
${apiKeys.base}weather?lat=${lat}&lon=${lon}&units=metric&APPID= ${apiKeys.key}
import apiKeys from "./apiKeys";
getWeather = async (lat, lon) => {
      const api_call = await fetch(
        ${apiKeys.base}weather?lat=${lat}&lon=${lon}&units=metric&APPID=${apiKeys.key}
      );
      const data = await api_call.json();
      this.setState({
        lat: lat,
        lon: lon,
        city: data.name,
        temperatureC: Math.round(data.main.temp),
        temperatureF: Math.round(data.main.temp * 1.8 + 32),
        humidity: data.main.humidity,
        main: data.weather[0].main,
        country: data.sys.country,
      });
    };
const [query, setQuery] = useState("");
    const [error, setError] = useState("");
    const [weather, setWeather] = useState({});
<input type="text" className="search-bar"
    placeholder="Search any city"
    onChange={(e) => setQuery(e.target.value)}
    value={query}>
  <div className="img-box">
    {" "}
    </div>
    <img src="https://images.avishkaar.cc/workflow/newhp/search-white.png" onClick={search}>
</img>
    
const search = (city) = {
      axios
        .get(
          `${apiKeys.base}weather?q=${
            city != "[object Object]" ? city : query
          }&units=metric&APPID=${apiKeys.key}`
        )
        .then((response) => {
          setWeather(response.data);
          setQuery("");
        })
        .catch(function (error) {
          console.log(error);
          setWeather("");
          setQuery("");
          setError({ message: "Not Found", query: query });
        });
    };
useEffect(() = {
      search("Delhi");
    }, []);
axios
    .get(
      `${apiKeys.base}weather?q=${
        city != "[object Object]" ? city : query
      }&units=metric&APPID=${apiKeys.key}`
    )
const search = (city) = {
      alert(city); 
      axios
        .get(
          `${apiKeys.base}weather?q=${
            city != "[object Object]" ? city : query
          }&units=metric&APPID=${apiKeys.key}`
        )
        .then((response) = {
          setWeather(response.data);
          setQuery("");
        })
        .catch(function (error) {
          console.log(error);
          setWeather("");
          setQuery("");
          setError({ message= "Not Found", query= query });
        });
    };
const defaults = {
      color= "white",
      size= 112,
      animate= true,
};
switch (this.state.main) {
      case "Haze":
        this.setState({ icon= "CLEAR_DAY" });
        break;
      case "Clouds":
        this.setState({ icon= "CLOUDY" });
        break;
      case "Rain":
        this.setState({ icon= "RAIN" });
        break;
      case "Snow":
        this.setState({ icon= "SNOW" });
        break;
      case "Dust":
        this.setState({ icon= "WIND" });
        break;
      case "Drizzle":
        this.setState({ icon= "SLEET" });
        break;
      case "Fog":
        this.setState({ icon= "FOG" });
        break;
      case "Smoke":
        this.setState({ icon= "FOG" });
        break;
      case "Tornado":
        this.setState({ icon= "WIND" });
        break;
      default:
        this.setState({ icon= "CLEAR_DAY" });
    }