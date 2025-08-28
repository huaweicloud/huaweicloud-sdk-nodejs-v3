

export class MultiNodesSingleMetricMetrics {
    private 'instance_id'?: string;
    private 'node_id'?: string;
    public series?: Array<number>;
    public timestamps?: Array<number>;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): MultiNodesSingleMetricMetrics {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNodeId(nodeId: string): MultiNodesSingleMetricMetrics {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withSeries(series: Array<number>): MultiNodesSingleMetricMetrics {
        this['series'] = series;
        return this;
    }
    public withTimestamps(timestamps: Array<number>): MultiNodesSingleMetricMetrics {
        this['timestamps'] = timestamps;
        return this;
    }
}