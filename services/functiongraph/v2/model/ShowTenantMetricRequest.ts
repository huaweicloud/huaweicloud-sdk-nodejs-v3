

export class ShowTenantMetricRequest {
    public period?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'metric_type'?: string;
    public constructor() { 
    }
    public withPeriod(period: string): ShowTenantMetricRequest {
        this['period'] = period;
        return this;
    }
    public withStartTime(startTime: string): ShowTenantMetricRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ShowTenantMetricRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withMetricType(metricType: string): ShowTenantMetricRequest {
        this['metric_type'] = metricType;
        return this;
    }
    public set metricType(metricType: string  | undefined) {
        this['metric_type'] = metricType;
    }
    public get metricType(): string | undefined {
        return this['metric_type'];
    }
}