const DayWeather = (props) => {
    return (
        <div className="day-wrapper">
            <h2>{props.weather.weekday}</h2>
            <div className="picture">
                <img src={props.weather.img} alt="" />
            </div>
            <p>{props.weather.minTemp} / {props.weather.maxTemp} </p>
        </div>
    );
}

export default DayWeather;