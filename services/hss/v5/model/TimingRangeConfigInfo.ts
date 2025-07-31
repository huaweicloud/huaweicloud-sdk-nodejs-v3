

export class TimingRangeConfigInfo {
    private 'time_range'?: string;
    public description?: string;
    public constructor() { 
    }
    public withTimeRange(timeRange: string): TimingRangeConfigInfo {
        this['time_range'] = timeRange;
        return this;
    }
    public set timeRange(timeRange: string  | undefined) {
        this['time_range'] = timeRange;
    }
    public get timeRange(): string | undefined {
        return this['time_range'];
    }
    public withDescription(description: string): TimingRangeConfigInfo {
        this['description'] = description;
        return this;
    }
}