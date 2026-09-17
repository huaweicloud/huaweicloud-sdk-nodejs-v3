

export class ListExceptionMetricsRequestBody {
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'engine_type'?: string;
    private 'node_id'?: string;
    private 'metric_names'?: Array<string>;
    public interval?: string;
    private 'aggregation_mode'?: string;
    public constructor(startTime?: number, endTime?: number, metricNames?: Array<string>, interval?: string, aggregationMode?: string) { 
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['metric_names'] = metricNames;
        this['interval'] = interval;
        this['aggregation_mode'] = aggregationMode;
    }
    public withStartTime(startTime: number): ListExceptionMetricsRequestBody {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListExceptionMetricsRequestBody {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withEngineType(engineType: string): ListExceptionMetricsRequestBody {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withNodeId(nodeId: string): ListExceptionMetricsRequestBody {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withMetricNames(metricNames: Array<string>): ListExceptionMetricsRequestBody {
        this['metric_names'] = metricNames;
        return this;
    }
    public set metricNames(metricNames: Array<string>  | undefined) {
        this['metric_names'] = metricNames;
    }
    public get metricNames(): Array<string> | undefined {
        return this['metric_names'];
    }
    public withInterval(interval: string): ListExceptionMetricsRequestBody {
        this['interval'] = interval;
        return this;
    }
    public withAggregationMode(aggregationMode: string): ListExceptionMetricsRequestBody {
        this['aggregation_mode'] = aggregationMode;
        return this;
    }
    public set aggregationMode(aggregationMode: string  | undefined) {
        this['aggregation_mode'] = aggregationMode;
    }
    public get aggregationMode(): string | undefined {
        return this['aggregation_mode'];
    }
}