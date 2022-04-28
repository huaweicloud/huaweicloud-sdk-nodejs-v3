

export class ShowTenantMetricRequest {
    public period?: string;
    private 'start_time'?: string | undefined;
    private 'end_time'?: string | undefined;
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
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ShowTenantMetricRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
}