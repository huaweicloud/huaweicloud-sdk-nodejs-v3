

export class Port {
    public id?: string;
    private 'ip_address'?: string;
    public constructor() { 
    }
    public withId(id: string): Port {
        this['id'] = id;
        return this;
    }
    public withIpAddress(ipAddress: string): Port {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): string | undefined {
        return this['ip_address'];
    }
}