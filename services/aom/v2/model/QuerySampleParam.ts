import { QuerySample } from './QuerySample';


export class QuerySampleParam {
    public samples?: Array<QuerySample>;
    public statistics?: Array<string>;
    public period?: number;
    private 'time_range'?: string;
    public constructor(samples?: Array<QuerySample>, statistics?: Array<string>, period?: number, timeRange?: string) { 
        this['samples'] = samples;
        this['statistics'] = statistics;
        this['period'] = period;
        this['time_range'] = timeRange;
    }
    public withSamples(samples: Array<QuerySample>): QuerySampleParam {
        this['samples'] = samples;
        return this;
    }
    public withStatistics(statistics: Array<string>): QuerySampleParam {
        this['statistics'] = statistics;
        return this;
    }
    public withPeriod(period: number): QuerySampleParam {
        this['period'] = period;
        return this;
    }
    public withTimeRange(timeRange: string): QuerySampleParam {
        this['time_range'] = timeRange;
        return this;
    }
    public set timeRange(timeRange: string  | undefined) {
        this['time_range'] = timeRange;
    }
    public get timeRange(): string | undefined {
        return this['time_range'];
    }
}