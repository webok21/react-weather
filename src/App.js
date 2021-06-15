import './App.css';
import DayWeather from './components/DayWeather';

const data = [{
  "weekday": "Mo",
  "img": "",
  "maxTemp": "15°C",
  "minTemp": "11°C"
},
{
  "weekday": "Di",
  "img": "",
  "maxTemp": "22°C",
  "minTemp": "16°C"
},
{
  "weekday": "Mi",
  "img": "",
  "maxTemp": "21°C",
  "minTemp": "12°C"
},
{
  "weekday": "Do",
  "img": "",
  "maxTemp": "13°C",
  "minTemp": "5°C"
},
{
  "weekday": "Fr",
  "img": "",
  "maxTemp": "11°C",
  "minTemp": "6°C"
},
{
  "weekday": "Sa",
  "img": "",
  "maxTemp": "14°C",
  "minTemp": "8°C"
},
{
  "weekday": "So",
  "img": "",
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
