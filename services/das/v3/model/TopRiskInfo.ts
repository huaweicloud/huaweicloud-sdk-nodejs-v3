

export class TopRiskInfo {
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'node_id'?: string;
    private 'metric_names'?: Array<string>;
    private 'metric_values'?: Array<number>;
    public constructor(instanceId?: string, instanceName?: string, nodeId?: string, metricNames?: Array<string>, metricValues?: Array<number>) { 
        this['instance_id'] = instanceId;
        this['instance_name'] = instanceName;
        this['node_id'] = nodeId;
        this['metric_names'] = metricNames;
        this['metric_values'] = metricValues;
    }
    public withInstanceId(instanceId: string): TopRiskInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): TopRiskInfo {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withNodeId(nodeId: string): TopRiskInfo {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withMetricNames(metricNames: Array<string>): TopRiskInfo {
        this['metric_names'] = metricNames;
        return this;
    }
    public set metricNames(metricNames: Array<string>  | undefined) {
        this['metric_names'] = metricNames;
    }
    public get metricNames(): Array<string> | undefined {
        return this['metric_names'];
    }
    public withMetricValues(metricValues: Array<number>): TopRiskInfo {
        this['metric_values'] = metricValues;
        return this;
    }
    public set metricValues(metricValues: Array<number>  | undefined) {
        this['metric_values'] = metricValues;
    }
    public get metricValues(): Array<number> | undefined {
        return this['metric_values'];
    }
}