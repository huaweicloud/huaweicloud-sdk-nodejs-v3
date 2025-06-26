

export class ServerAddress {
    public addr?: string;
    public version?: string;
    private 'OS-EXT-IPS-MAC:mac_addr'?: string;
    private 'OS-EXT-IPS:type'?: string;
    private 'OS-EXT-IPS:port_id'?: string;
    public constructor() { 
    }
    public withAddr(addr: string): ServerAddress {
        this['addr'] = addr;
        return this;
    }
    public withVersion(version: string): ServerAddress {
        this['version'] = version;
        return this;
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
    public withOSEXTIPSType(oSEXTIPSType: string): ServerAddress {
        this['OS-EXT-IPS:type'] = oSEXTIPSType;
        return this;
    }
    public set oSEXTIPSType(oSEXTIPSType: string  | undefined) {
        this['OS-EXT-IPS:type'] = oSEXTIPSType;
    }
    public get oSEXTIPSType(): string | undefined {
        return this['OS-EXT-IPS:type'];
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