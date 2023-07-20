

export class DisassociateServerVirtualIpOption {
    private 'subnet_id'?: DisassociateServerVirtualIpOptionSubnetIdEnum | string;
    private 'ip_address'?: DisassociateServerVirtualIpOptionIpAddressEnum | string;
    private 'reverse_binding'?: boolean;
    public constructor(subnetId?: string, ipAddress?: string) { 
        this['subnet_id'] = subnetId;
        this['ip_address'] = ipAddress;
    }
    public withSubnetId(subnetId: DisassociateServerVirtualIpOptionSubnetIdEnum | string): DisassociateServerVirtualIpOption {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: DisassociateServerVirtualIpOptionSubnetIdEnum | string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): DisassociateServerVirtualIpOptionSubnetIdEnum | string | undefined {
        return this['subnet_id'];
    }
    public withIpAddress(ipAddress: DisassociateServerVirtualIpOptionIpAddressEnum | string): DisassociateServerVirtualIpOption {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: DisassociateServerVirtualIpOptionIpAddressEnum | string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): DisassociateServerVirtualIpOptionIpAddressEnum | string | undefined {
        return this['ip_address'];
    }
    public withReverseBinding(reverseBinding: boolean): DisassociateServerVirtualIpOption {
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

/**
    * @export
    * @enum {string}
    */
export enum DisassociateServerVirtualIpOptionSubnetIdEnum {
    Empty = ''
}
/**
    * @export
    * @enum {string}
    */
export enum DisassociateServerVirtualIpOptionIpAddressEnum {
    Empty = ''
}
