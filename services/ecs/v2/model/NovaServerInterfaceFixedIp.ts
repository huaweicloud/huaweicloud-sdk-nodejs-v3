

export class NovaServerInterfaceFixedIp {
    private 'ip_address'?: string;
    private 'subnet_id'?: string;
    public constructor(ipAddress?: string, subnetId?: string) { 
        this['ip_address'] = ipAddress;
        this['subnet_id'] = subnetId;
    }
    public withIpAddress(ipAddress: string): NovaServerInterfaceFixedIp {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): string | undefined {
        return this['ip_address'];
    }
    public withSubnetId(subnetId: string): NovaServerInterfaceFixedIp {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
}