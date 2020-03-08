import React, {useState} from 'react';
import SearchAppBar from "./AppBar";
import WeatherGrids from "./WeatherGrids";
import ForeCastServices from "../services/ForeCastServices";
import {Forecast, List} from "../model/Forecast";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CustomizedSnackbars, {ErrorMessageType} from "./CustomizedSnackbars";

const App: React.FunctionComponent<IAppProps> = (props) => {

    const [searchValue, setSearchValue] = useState('');
    const [forecast, setForecast] = useState<Forecast | null>(null);
    const [showMessage, setShowMessage] =
        useState<ErrorMessageType>
        ({type: 'info', message: 'Type city name and press enter to search for a city forecast'});
    const [headerDay, setHeaderDay] = useState<List>();

    const handleSearchInput = (cityName: string) => {
        setSearchValue(cityName);
    };

    const onClickUpdate = (day: List) => {
        setHeaderDay(day);
    };

    const getWeatherForeCastByCity = async (e: Event) => {
        e.preventDefault();
        const foreCast = await ForeCastServices.getForecastByCity(searchValue);

        if (foreCast === null) {
            setForecast(null);
            setShowMessage({type: "warning", message: 'Not able to reach server'});
        } else if (foreCast.cod === '200') {
            if ("list" in foreCast) {
                setForecast(foreCast);
                setHeaderDay(foreCast.list[0])
            }
        } else {
            setForecast(null);
            setShowMessage({type: 'error', message: `${foreCast.message}`});
        }
    };

    return (
        <MuiThemeProvider>
            <div className={'app'}>
                <SearchAppBar
                    getForeCast={getWeatherForeCastByCity}
                    textChanged={handleSearchInput}
                />
                {forecast === null ?
                    <CustomizedSnackbars showMessage={showMessage}/> :
                    <WeatherGrids
                        forecast={forecast}
                        searchValue={searchValue}
                        onClickUpdate={onClickUpdate}
                        headerDay={headerDay}
                    />}
            </div>
        </MuiThemeProvider>
    );
};

interface IAppProps {
}

interface IAppState {
    searchValue: string;
}

export default App;
