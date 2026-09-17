

export class ShowSpaceTrendRequest {
    private 'instance_id'?: string;
    private 'engine_type'?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'metric_name'?: string;
    private 'node_id'?: string;
    public constructor(instanceId?: string, engineType?: string, startTime?: number, endTime?: number, metricName?: string) { 
        this['instance_id'] = instanceId;
        this['engine_type'] = engineType;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['metric_name'] = metricName;
    }
    public withInstanceId(instanceId: string): ShowSpaceTrendRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withEngineType(engineType: string): ShowSpaceTrendRequest {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withStartTime(startTime: number): ShowSpaceTrendRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ShowSpaceTrendRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withMetricName(metricName: string): ShowSpaceTrendRequest {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withNodeId(nodeId: string): ShowSpaceTrendRequest {
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