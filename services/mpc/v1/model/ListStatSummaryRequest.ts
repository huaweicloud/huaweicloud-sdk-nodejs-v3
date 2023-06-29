

export class ListStatSummaryRequest {
    private 'start_time': string | undefined;
    private 'end_time': string | undefined;
    private 'stat_type': string | undefined;
    public constructor(startTime?: any, endTime?: any, statType?: any) { 
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['stat_type'] = statType;
    }
    public withStartTime(startTime: string): ListStatSummaryRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListStatSummaryRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withStatType(statType: string): ListStatSummaryRequest {
        this['stat_type'] = statType;
        return this;
    }
    public set statType(statType: string | undefined) {
        this['stat_type'] = statType;
    }
    public get statType() {
        return this['stat_type'];
    }
}