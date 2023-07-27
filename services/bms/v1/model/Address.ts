

export class Address {
    public version?: AddressVersionEnum | number;
    public addr?: string;
    private 'OS-EXT-IPS:type'?: AddressOSEXTIPSTypeEnum | string;
    private 'OS-EXT-IPS-MAC:mac_addr'?: string;
    private 'OS-EXT-IPS:port_id'?: string;
    public constructor() { 
    }
    public withVersion(version: AddressVersionEnum | number): Address {
        this['version'] = version;
        return this;
    }
    public withAddr(addr: string): Address {
        this['addr'] = addr;
        return this;
    }
    public withOSEXTIPSType(oSEXTIPSType: AddressOSEXTIPSTypeEnum | string): Address {
        this['OS-EXT-IPS:type'] = oSEXTIPSType;
        return this;
    }
    public set oSEXTIPSType(oSEXTIPSType: AddressOSEXTIPSTypeEnum | string  | undefined) {
        this['OS-EXT-IPS:type'] = oSEXTIPSType;
    }
    public get oSEXTIPSType(): AddressOSEXTIPSTypeEnum | string | undefined {
        return this['OS-EXT-IPS:type'];
    }
    public withOSEXTIPSMACMacAddr(oSEXTIPSMACMacAddr: string): Address {
        this['OS-EXT-IPS-MAC:mac_addr'] = oSEXTIPSMACMacAddr;
        return this;
    }
    public set oSEXTIPSMACMacAddr(oSEXTIPSMACMacAddr: string  | undefined) {
        this['OS-EXT-IPS-MAC:mac_addr'] = oSEXTIPSMACMacAddr;
    }
    public get oSEXTIPSMACMacAddr(): string | undefined {
        return this['OS-EXT-IPS-MAC:mac_addr'];
    }
    public withOSEXTIPSPortId(oSEXTIPSPortId: string): Address {
        this['OS-EXT-IPS:port_id'] = oSEXTIPSPortId;
        return this;
    }
    public set oSEXTIPSPortId(oSEXTIPSPortId: string  | undefined) {
        this['OS-EXT-IPS:port_id'] = oSEXTIPSPortId;
    }
    public get oSEXTIPSPortId(): string | undefined {
        return this['OS-EXT-IPS:port_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AddressVersionEnum {
    NUMBER_4 = 4,
    NUMBER_6 = 6
}
/**
    * @export
    * @enum {string}
    */
export enum AddressOSEXTIPSTypeEnum {
    FIXED = 'fixed',
    FLOATING = 'floating'
}
