

export class IpInfo {
    private 'ip_address'?: string;
    private 'subnet_mask'?: string;
    public constructor(ipAddress?: string, subnetMask?: string) { 
        this['ip_address'] = ipAddress;
        this['subnet_mask'] = subnetMask;
    }
    public withIpAddress(ipAddress: string): IpInfo {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): string | undefined {
        return this['ip_address'];
    }
    public withSubnetMask(subnetMask: string): IpInfo {
        this['subnet_mask'] = subnetMask;
        return this;
    }
    public set subnetMask(subnetMask: string  | undefined) {
        this['subnet_mask'] = subnetMask;
    }
    public get subnetMask(): string | undefined {
        return this['subnet_mask'];
    }
}