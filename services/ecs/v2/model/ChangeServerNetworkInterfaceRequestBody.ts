

export class ChangeServerNetworkInterfaceRequestBody {
    private 'subnet_id'?: string;
    private 'ip_address'?: string;
    private 'ipv6_address'?: string;
    public constructor() { 
    }
    public withSubnetId(subnetId: string): ChangeServerNetworkInterfaceRequestBody {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withIpAddress(ipAddress: string): ChangeServerNetworkInterfaceRequestBody {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): string | undefined {
        return this['ip_address'];
    }
    public withIpv6Address(ipv6Address: string): ChangeServerNetworkInterfaceRequestBody {
        this['ipv6_address'] = ipv6Address;
        return this;
    }
    public set ipv6Address(ipv6Address: string  | undefined) {
        this['ipv6_address'] = ipv6Address;
    }
    public get ipv6Address(): string | undefined {
        return this['ipv6_address'];
    }
}