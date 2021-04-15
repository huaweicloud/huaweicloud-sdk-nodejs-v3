

export class InitialDesired {
    private 'service_id': string | undefined;
    public desired: object;
    public constructor(serviceId?: any, desired?: any) { 
        this['service_id'] = serviceId;
        this['desired'] = desired;
    }
    public withServiceId(serviceId: string): InitialDesired {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId() {
        return this['service_id'];
    }
    public withDesired(desired: object): InitialDesired {
        this['desired'] = desired;
        return this;
    }
}