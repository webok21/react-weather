const DayWeather = (props) => {
    return (
        <div className="day-wrapper">
            <h2>{props.weather.weekday}</h2>
            <img src={props.product.img} alt="" />
            <p>{props.weather.minTemp} {props.weather.maxTemp} </p>
        </div>
    );
}

export default DayWeather;