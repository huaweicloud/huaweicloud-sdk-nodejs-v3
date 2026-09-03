

export class DasMetricInfo {
    private 'instance_id'?: string;
    private 'threshold_index'?: number;
    private 'instance_status'?: string;
    public timestamp?: number;
    public metrics?: object;
    private 'threshold_metrics'?: object;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): DasMetricInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withThresholdIndex(thresholdIndex: number): DasMetricInfo {
        this['threshold_index'] = thresholdIndex;
        return this;
    }
    public set thresholdIndex(thresholdIndex: number  | undefined) {
        this['threshold_index'] = thresholdIndex;
    }
    public get thresholdIndex(): number | undefined {
        return this['threshold_index'];
    }
    public withInstanceStatus(instanceStatus: string): DasMetricInfo {
        this['instance_status'] = instanceStatus;
        return this;
    }
    public set instanceStatus(instanceStatus: string  | undefined) {
        this['instance_status'] = instanceStatus;
    }
    public get instanceStatus(): string | undefined {
        return this['instance_status'];
    }
    public withTimestamp(timestamp: number): DasMetricInfo {
        this['timestamp'] = timestamp;
        return this;
    }
    public withMetrics(metrics: object): DasMetricInfo {
        this['metrics'] = metrics;
        return this;
    }
    public withThresholdMetrics(thresholdMetrics: object): DasMetricInfo {
        this['threshold_metrics'] = thresholdMetrics;
        return this;
    }
    public set thresholdMetrics(thresholdMetrics: object  | undefined) {
        this['threshold_metrics'] = thresholdMetrics;
    }
    public get thresholdMetrics(): object | undefined {
        return this['threshold_metrics'];
    }
}