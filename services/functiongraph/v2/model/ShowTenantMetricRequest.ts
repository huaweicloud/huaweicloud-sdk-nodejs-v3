

export class ShowTenantMetricRequest {
    public period?: string;
    public constructor() { 
    }
    public withPeriod(period: string): ShowTenantMetricRequest {
        this['period'] = period;
        return this;
    }
}