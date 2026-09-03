

export class ShowTestsuiteInfoUsingRequest {
    private 'service_id'?: string;
    private 'suite_id'?: string;
    public planId?: string;
    public constructor(serviceId?: string, suiteId?: string) { 
        this['service_id'] = serviceId;
        this['suite_id'] = suiteId;
    }
    public withServiceId(serviceId: string): ShowTestsuiteInfoUsingRequest {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withSuiteId(suiteId: string): ShowTestsuiteInfoUsingRequest {
        this['suite_id'] = suiteId;
        return this;
    }
    public set suiteId(suiteId: string  | undefined) {
        this['suite_id'] = suiteId;
    }
    public get suiteId(): string | undefined {
        return this['suite_id'];
    }
    public withPlanId(planId: string): ShowTestsuiteInfoUsingRequest {
        this['planId'] = planId;
        return this;
    }
}