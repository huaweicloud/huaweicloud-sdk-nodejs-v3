

export class AssociateServerVirtualIpOption {
    private 'subnet_id'?: string;
    private 'ip_address'?: string;
    private 'reverse_binding'?: boolean;
    public constructor(subnetId?: string, ipAddress?: string) { 
        this['subnet_id'] = subnetId;
        this['ip_address'] = ipAddress;
    }
    public withSubnetId(subnetId: string): AssociateServerVirtualIpOption {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withIpAddress(ipAddress: string): AssociateServerVirtualIpOption {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): string | undefined {
        return this['ip_address'];
    }
    public withReverseBinding(reverseBinding: boolean): AssociateServerVirtualIpOption {
        this['reverse_binding'] = reverseBinding;
        return this;
    }
    public set reverseBinding(reverseBinding: boolean  | undefined) {
        this['reverse_binding'] = reverseBinding;
    }
    public get reverseBinding(): boolean | undefined {
        return this['reverse_binding'];
    }
}