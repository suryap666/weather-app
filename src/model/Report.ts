class ReportModel {
    public createData = (day: string, date: string, temperature: string, condition: string): Data => {
        return {day, date, temperature, condition};
    };

    public rows = [
        this.createData('India', 'IN', '1324171354', '3287263'),
    ];
}

export default new ReportModel();

interface Data {
    day: string;
    date: string;
    temperature: string;
    condition: string;
}


