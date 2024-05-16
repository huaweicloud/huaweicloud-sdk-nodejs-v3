

export class StarRocksInstanceInfoOpsWindow {
    public period?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor() { 
    }
    public withPeriod(period: string): StarRocksInstanceInfoOpsWindow {
        this['period'] = period;
        return this;
    }
    public withStartTime(startTime: string): StarRocksInstanceInfoOpsWindow {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): StarRocksInstanceInfoOpsWindow {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}