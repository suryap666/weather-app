import {FeelsLike, List} from "./model/Forecast";

const tempUnit = 'C';

class Shared {
    public averageTemperature(day: List) {
        return `${Math.round(
            Object.values(day.temp).reduce(
                (sum, current) => sum + current) / Object.values(day.temp).length)}°${tempUnit}`
    }

    public getCurrentTemp = (temps: FeelsLike) => {
        const hours = new Date(Date.now()).getHours();

        if (hours >= 6 && hours < 12) {
            return `${Math.round(temps.morn)}°${tempUnit}`;
        } else if (hours >= 12 && hours < 18) {
            return `${Math.round(temps.day)}°${tempUnit}`;
        } else if (hours >= 18 && hours < 24) {
            return `${Math.round(temps.eve)}°${tempUnit}`;
        } else {
            return `${Math.round(temps.night)}°${tempUnit}`;
        }
    };

    public getDay = (index: number) => {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[index];
    };

    public getDate = (seconds: number) => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const date = new Date(seconds * 1000);
        return `${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
    };

    public getDateString = (seconds: number) => {
        const date = new Date(seconds * 1000);
        return `${this.getDay(date.getDay())}, ${this.getDate(seconds)}`;
    };

    public isDay = () => {
        const hours = new Date(Date.now()).getHours();
        return hours >= 7 && hours <= 20;
    };

    public isTemperatureGreater = (temperature: string,  baseTemperature: number = 20) => {
        let valueToCompare = parseInt(temperature.replace('°C', ''))
        return valueToCompare > baseTemperature;
    }
}


export default new Shared();
