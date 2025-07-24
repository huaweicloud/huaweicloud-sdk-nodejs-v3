

export class ShowConcurrencyPackageUsingRequest {
    private 'service_id'?: string;
    private 'test_type'?: string;
    public constructor(serviceId?: string) { 
        this['service_id'] = serviceId;
    }
    public withServiceId(serviceId: string): ShowConcurrencyPackageUsingRequest {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withTestType(testType: string): ShowConcurrencyPackageUsingRequest {
        this['test_type'] = testType;
        return this;
    }
    public set testType(testType: string  | undefined) {
        this['test_type'] = testType;
    }
    public get testType(): string | undefined {
        return this['test_type'];
    }
}