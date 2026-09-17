

export class ExceptionMetricData {
    private 'instance_id'?: string;
    public name?: string;
    public series?: Array<number>;
    public timestamps?: Array<number>;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): ExceptionMetricData {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withName(name: string): ExceptionMetricData {
        this['name'] = name;
        return this;
    }
    public withSeries(series: Array<number>): ExceptionMetricData {
        this['series'] = series;
        return this;
    }
    public withTimestamps(timestamps: Array<number>): ExceptionMetricData {
        this['timestamps'] = timestamps;
        return this;
    }
}