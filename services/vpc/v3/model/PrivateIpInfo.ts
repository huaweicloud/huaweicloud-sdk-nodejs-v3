

export class PrivateIpInfo {
    private 'subnet_cidr_id'?: string;
    private 'ip_address'?: string;
    public constructor(subnetCidrId?: string, ipAddress?: string) { 
        this['subnet_cidr_id'] = subnetCidrId;
        this['ip_address'] = ipAddress;
    }
    public withSubnetCidrId(subnetCidrId: string): PrivateIpInfo {
        this['subnet_cidr_id'] = subnetCidrId;
        return this;
    }
    public set subnetCidrId(subnetCidrId: string  | undefined) {
        this['subnet_cidr_id'] = subnetCidrId;
    }
    public get subnetCidrId(): string | undefined {
        return this['subnet_cidr_id'];
    }
    public withIpAddress(ipAddress: string): PrivateIpInfo {
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