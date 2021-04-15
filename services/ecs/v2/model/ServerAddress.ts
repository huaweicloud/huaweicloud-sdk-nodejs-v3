

export class ServerAddress {
    public version: string;
    public addr: string;
    private 'OS-EXT-IPS:type'?: ServerAddressOSEXTIPSTypeEnum | undefined;
    private 'OS-EXT-IPS-MAC:mac_addr'?: string | undefined;
    private 'OS-EXT-IPS:port_id'?: string | undefined;
    public constructor(version?: any, addr?: any) { 
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
    public withOSEXTIPSType(oSEXTIPSType: ServerAddressOSEXTIPSTypeEnum): ServerAddress {
        this['OS-EXT-IPS:type'] = oSEXTIPSType;
        return this;
    }
    public set oSEXTIPSType(oSEXTIPSType: ServerAddressOSEXTIPSTypeEnum | undefined) {
        this['OS-EXT-IPS:type'] = oSEXTIPSType;
    }
    public get oSEXTIPSType() {
        return this['OS-EXT-IPS:type'];
    }
    public withOSEXTIPSMACMacAddr(oSEXTIPSMACMacAddr: string): ServerAddress {
        this['OS-EXT-IPS-MAC:mac_addr'] = oSEXTIPSMACMacAddr;
        return this;
    }
    public set oSEXTIPSMACMacAddr(oSEXTIPSMACMacAddr: string | undefined) {
        this['OS-EXT-IPS-MAC:mac_addr'] = oSEXTIPSMACMacAddr;
    }
    public get oSEXTIPSMACMacAddr() {
        return this['OS-EXT-IPS-MAC:mac_addr'];
    }
    public withOSEXTIPSPortId(oSEXTIPSPortId: string): ServerAddress {
        this['OS-EXT-IPS:port_id'] = oSEXTIPSPortId;
        return this;
    }
    public set oSEXTIPSPortId(oSEXTIPSPortId: string | undefined) {
        this['OS-EXT-IPS:port_id'] = oSEXTIPSPortId;
    }
    public get oSEXTIPSPortId() {
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
