

export class DisassociateServerVirtualIpOption {
    private 'subnet_id': DisassociateServerVirtualIpOptionSubnetIdEnum | undefined;
    private 'ip_address': DisassociateServerVirtualIpOptionIpAddressEnum | undefined;
    private 'reverse_binding'?: boolean | undefined;
    public constructor(subnetId?: any, ipAddress?: any) { 
        this['subnet_id'] = subnetId;
        this['ip_address'] = ipAddress;
    }
    public withSubnetId(subnetId: DisassociateServerVirtualIpOptionSubnetIdEnum): DisassociateServerVirtualIpOption {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: DisassociateServerVirtualIpOptionSubnetIdEnum | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId() {
        return this['subnet_id'];
    }
    public withIpAddress(ipAddress: DisassociateServerVirtualIpOptionIpAddressEnum): DisassociateServerVirtualIpOption {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: DisassociateServerVirtualIpOptionIpAddressEnum | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress() {
        return this['ip_address'];
    }
    public withReverseBinding(reverseBinding: boolean): DisassociateServerVirtualIpOption {
        this['reverse_binding'] = reverseBinding;
        return this;
    }
    public set reverseBinding(reverseBinding: boolean | undefined) {
        this['reverse_binding'] = reverseBinding;
    }
    public get reverseBinding() {
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
