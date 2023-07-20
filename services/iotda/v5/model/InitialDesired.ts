

export class InitialDesired {
    private 'service_id'?: string;
    public desired?: object;
    public constructor(serviceId?: string, desired?: object) { 
        this['service_id'] = serviceId;
        this['desired'] = desired;
    }
    public withServiceId(serviceId: string): InitialDesired {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withDesired(desired: object): InitialDesired {
        this['desired'] = desired;
        return this;
    }
}