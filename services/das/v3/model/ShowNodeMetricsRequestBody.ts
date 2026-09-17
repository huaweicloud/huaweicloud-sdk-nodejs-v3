

export class ShowNodeMetricsRequestBody {
    private 'metric_names'?: Array<string>;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'node_id'?: string;
    public constructor(metricNames?: Array<string>, startTime?: number, endTime?: number) { 
        this['metric_names'] = metricNames;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withMetricNames(metricNames: Array<string>): ShowNodeMetricsRequestBody {
        this['metric_names'] = metricNames;
        return this;
    }
    public set metricNames(metricNames: Array<string>  | undefined) {
        this['metric_names'] = metricNames;
    }
    public get metricNames(): Array<string> | undefined {
        return this['metric_names'];
    }
    public withStartTime(startTime: number): ShowNodeMetricsRequestBody {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ShowNodeMetricsRequestBody {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withNodeId(nodeId: string): ShowNodeMetricsRequestBody {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
}