import './App.css';
import DayWeather from './components/DayWeather';

const data = [{
  "weekday": "Mo",
  "img": "./img/sun.png",
  "maxTemp": "15°C",
  "minTemp": "11°C"
},
{
  "weekday": "Di",
  "img": "./img/mostly-sunny.png",
  "maxTemp": "22°C",
  "minTemp": "16°C"
},
{
  "weekday": "Mi",
  "img": "./img/cloudy-with-sun.png",
  "maxTemp": "21°C",
  "minTemp": "12°C"
},
{
  "weekday": "Do",
  "img": "./img/cloudy.png",
  "maxTemp": "13°C",
  "minTemp": "5°C"
},
{
  "weekday": "Fr",
  "img": "./img/thunder.png",
  "maxTemp": "11°C",
  "minTemp": "6°C"
},
{
  "weekday": "Sa",
  "img": "./img/sun.png",
  "maxTemp": "14°C",
  "minTemp": "8°C"
},
{
  "weekday": "So",
  "img": "./img/thunder.png",
  "maxTemp": "5°C",
  "minTemp": "0°C"
}
]

function App() {
  return (
    <main>
      {data.map((singleData, i) => <DayWeather
        key={i}
        weather={singleData}
      />)
      }
    </main>
  );
}

export default App;
