

export class AgencyServices {
    private 'service_id'?: string;
    public actions?: Array<string>;
    public constructor() { 
    }
    public withServiceId(serviceId: string): AgencyServices {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withActions(actions: Array<string>): AgencyServices {
        this['actions'] = actions;
        return this;
    }
}