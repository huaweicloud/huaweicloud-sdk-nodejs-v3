

export class ListStatSummaryRequest {
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'stat_type'?: string;
    public constructor(startTime?: string, endTime?: string, statType?: string) { 
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['stat_type'] = statType;
    }
    public withStartTime(startTime: string): ListStatSummaryRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListStatSummaryRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withStatType(statType: string): ListStatSummaryRequest {
        this['stat_type'] = statType;
        return this;
    }
    public set statType(statType: string  | undefined) {
        this['stat_type'] = statType;
    }
    public get statType(): string | undefined {
        return this['stat_type'];
    }
}