

export class BusinessEnvRequest {
    private 'business_id'?: number;
    public region?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor(businessId?: number) { 
        this['business_id'] = businessId;
    }
    public withBusinessId(businessId: number): BusinessEnvRequest {
        this['business_id'] = businessId;
        return this;
    }
    public set businessId(businessId: number  | undefined) {
        this['business_id'] = businessId;
    }
    public get businessId(): number | undefined {
        return this['business_id'];
    }
    public withRegion(region: string): BusinessEnvRequest {
        this['region'] = region;
        return this;
    }
    public withStartTime(startTime: string): BusinessEnvRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): BusinessEnvRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}