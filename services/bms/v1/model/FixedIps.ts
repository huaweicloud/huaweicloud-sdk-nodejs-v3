

export class FixedIps {
    private 'subnet_id'?: string;
    private 'ip_address'?: string;
    public constructor() { 
    }
    public withSubnetId(subnetId: string): FixedIps {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withIpAddress(ipAddress: string): FixedIps {
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