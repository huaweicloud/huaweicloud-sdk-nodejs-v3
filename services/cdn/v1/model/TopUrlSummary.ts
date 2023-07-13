

export class TopUrlSummary {
    public url?: string;
    public value?: number;
    private 'start_time'?: number | undefined;
    private 'end_time'?: number | undefined;
    private 'stat_type'?: string | undefined;
    public constructor() { 
    }
    public withUrl(url: string): TopUrlSummary {
        this['url'] = url;
        return this;
    }
    public withValue(value: number): TopUrlSummary {
        this['value'] = value;
        return this;
    }
    public withStartTime(startTime: number): TopUrlSummary {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: number): TopUrlSummary {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withStatType(statType: string): TopUrlSummary {
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