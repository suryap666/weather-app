import React, {useState} from 'react';
import SearchAppBar from "./AppBar";
import WeatherGrids from "./WeatherGrids";
import ForeCastServices from "../services/ForeCastServices";
import {Forecast} from "../model/Forecast";

const App: React.FunctionComponent<IAppProps> = (props) => {

    const [searchValue, setSearchValue] = useState('');
    const [forecast, setForecast] = useState<Forecast | null>(null);

    const handleSearchInput = (cityName: string) => {
        setSearchValue(cityName);
    };

    const getWeatherForeCastByCity = async (e: Event) => {
        e.preventDefault();
        setForecast(await ForeCastServices.getForecastByCity(searchValue));
    };

    return (
        <div className={'app'}>
            <SearchAppBar
                getForeCast={getWeatherForeCastByCity}
                textChanged={handleSearchInput}
            />
            <WeatherGrids forecast={forecast}/>
        </div>
    );
};

interface IAppProps {
}

interface IAppState {
    searchValue: string;
}

export default App;
