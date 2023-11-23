

export class StatisticData {
    private 'time_stamp'?: number;
    private 'statistic_num'?: number;
    public constructor() { 
    }
    public withTimeStamp(timeStamp: number): StatisticData {
        this['time_stamp'] = timeStamp;
        return this;
    }
    public set timeStamp(timeStamp: number  | undefined) {
        this['time_stamp'] = timeStamp;
    }
    public get timeStamp(): number | undefined {
        return this['time_stamp'];
    }
    public withStatisticNum(statisticNum: number): StatisticData {
        this['statistic_num'] = statisticNum;
        return this;
    }
    public set statisticNum(statisticNum: number  | undefined) {
        this['statistic_num'] = statisticNum;
    }
    public get statisticNum(): number | undefined {
        return this['statistic_num'];
    }
}