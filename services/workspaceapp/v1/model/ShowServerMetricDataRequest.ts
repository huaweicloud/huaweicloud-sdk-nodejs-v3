

export class ShowServerMetricDataRequest {
    private 'server_id'?: string;
    private 'start_time'?: Date;
    private 'end_time'?: Date;
    private 'metric_name'?: string;
    public constructor(serverId?: string, startTime?: Date, endTime?: Date) { 
        this['server_id'] = serverId;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withServerId(serverId: string): ShowServerMetricDataRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withStartTime(startTime: Date): ShowServerMetricDataRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: Date  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): Date | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: Date): ShowServerMetricDataRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: Date  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): Date | undefined {
        return this['end_time'];
    }
    public withMetricName(metricName: string): ShowServerMetricDataRequest {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
}