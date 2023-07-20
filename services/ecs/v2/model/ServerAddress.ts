

export class ServerAddress {
    public version?: string;
    public addr?: string;
    private 'OS-EXT-IPS:type'?: ServerAddressOSEXTIPSTypeEnum | string;
    private 'OS-EXT-IPS-MAC:mac_addr'?: string;
    private 'OS-EXT-IPS:port_id'?: string;
    public constructor(version?: string, addr?: string) { 
        this['version'] = version;
        this['addr'] = addr;
    }
    public withVersion(version: string): ServerAddress {
        this['version'] = version;
        return this;
    }
    public withAddr(addr: string): ServerAddress {
        this['addr'] = addr;
        return this;
    }
    public withOSEXTIPSType(oSEXTIPSType: ServerAddressOSEXTIPSTypeEnum | string): ServerAddress {
        this['OS-EXT-IPS:type'] = oSEXTIPSType;
        return this;
    }
    public set oSEXTIPSType(oSEXTIPSType: ServerAddressOSEXTIPSTypeEnum | string  | undefined) {
        this['OS-EXT-IPS:type'] = oSEXTIPSType;
    }
    public get oSEXTIPSType(): ServerAddressOSEXTIPSTypeEnum | string | undefined {
        return this['OS-EXT-IPS:type'];
    }
    public withOSEXTIPSMACMacAddr(oSEXTIPSMACMacAddr: string): ServerAddress {
        this['OS-EXT-IPS-MAC:mac_addr'] = oSEXTIPSMACMacAddr;
        return this;
    }
    public set oSEXTIPSMACMacAddr(oSEXTIPSMACMacAddr: string  | undefined) {
        this['OS-EXT-IPS-MAC:mac_addr'] = oSEXTIPSMACMacAddr;
    }
    public get oSEXTIPSMACMacAddr(): string | undefined {
        return this['OS-EXT-IPS-MAC:mac_addr'];
    }
    public withOSEXTIPSPortId(oSEXTIPSPortId: string): ServerAddress {
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
export enum ServerAddressOSEXTIPSTypeEnum {
    FIXED = 'fixed',
    FLOATING = 'floating'
}
