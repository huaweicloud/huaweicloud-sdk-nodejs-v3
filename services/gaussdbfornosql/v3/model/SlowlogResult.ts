

export class SlowlogResult {
    public time?: string;
    public database?: string;
    private 'query_sample'?: string;
    public type?: string;
    private 'start_time'?: string;
    public constructor(time?: string, database?: string, querySample?: string, type?: string, startTime?: string) { 
        this['time'] = time;
        this['database'] = database;
        this['query_sample'] = querySample;
        this['type'] = type;
        this['start_time'] = startTime;
    }
    public withTime(time: string): SlowlogResult {
        this['time'] = time;
        return this;
    }
    public withDatabase(database: string): SlowlogResult {
        this['database'] = database;
        return this;
    }
    public withQuerySample(querySample: string): SlowlogResult {
        this['query_sample'] = querySample;
        return this;
    }
    public set querySample(querySample: string  | undefined) {
        this['query_sample'] = querySample;
    }
    public get querySample(): string | undefined {
        return this['query_sample'];
    }
    public withType(type: string): SlowlogResult {
        this['type'] = type;
        return this;
    }
    public withStartTime(startTime: string): SlowlogResult {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
}