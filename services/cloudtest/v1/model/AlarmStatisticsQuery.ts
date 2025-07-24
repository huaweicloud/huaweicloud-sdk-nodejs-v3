

export class AlarmStatisticsQuery {
    private 'end_time'?: number;
    private 'start_time'?: number;
    public constructor() { 
    }
    public withEndTime(endTime: number): AlarmStatisticsQuery {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withStartTime(startTime: number): AlarmStatisticsQuery {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
}