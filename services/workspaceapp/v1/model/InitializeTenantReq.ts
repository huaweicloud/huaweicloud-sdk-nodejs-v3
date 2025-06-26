

export class InitializeTenantReq {
    private 'service_status'?: string;
    public constructor(serviceStatus?: string) { 
        this['service_status'] = serviceStatus;
    }
    public withServiceStatus(serviceStatus: string): InitializeTenantReq {
        this['service_status'] = serviceStatus;
        return this;
    }
    public set serviceStatus(serviceStatus: string  | undefined) {
        this['service_status'] = serviceStatus;
    }
    public get serviceStatus(): string | undefined {
        return this['service_status'];
    }
}