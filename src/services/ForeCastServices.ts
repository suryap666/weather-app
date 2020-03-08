import {Forecast} from "../model/Forecast";
import {ForecastError} from "../model/Error";

class ForeCastServices {
    public apiKey = 'dbb624c32c7f0d652500552c5ebbde56';
    public baseUrl: string = 'https://api.openweathermap.org/data/2.5/forecast';

    public getForecastByCity = async (city: string): Promise<null | Forecast | ForecastError> => {
        try {
            const response = await
                fetch(`${this.baseUrl}/daily?q=${city}&units=metric&cnt=8&appid=${this.apiKey}`);
            const contentType = response.headers.get("content-type");
            if (response.status === 200 && contentType && contentType.indexOf("application/json") !== -1) {
                return await response.json();
            } else if (contentType && contentType.indexOf("application/json") !== -1) {
                return await response.json();
            }
        } catch (e) {
            return null;
        }

        return null;
    }
}

export default new ForeCastServices();


