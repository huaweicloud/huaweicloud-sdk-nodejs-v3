

export class ShowPulsarMonitorStatsBody {
    private 'start_timestamp'?: number;
    private 'end_timestamp'?: number;
    public constructor() { 
    }
    public withStartTimestamp(startTimestamp: number): ShowPulsarMonitorStatsBody {
        this['start_timestamp'] = startTimestamp;
        return this;
    }
    public set startTimestamp(startTimestamp: number  | undefined) {
        this['start_timestamp'] = startTimestamp;
    }
    public get startTimestamp(): number | undefined {
        return this['start_timestamp'];
    }
    public withEndTimestamp(endTimestamp: number): ShowPulsarMonitorStatsBody {
        this['end_timestamp'] = endTimestamp;
        return this;
    }
    public set endTimestamp(endTimestamp: number  | undefined) {
        this['end_timestamp'] = endTimestamp;
    }
    public get endTimestamp(): number | undefined {
        return this['end_timestamp'];
    }
}