

export class NovaNetwork {
    public addr: string;
    public version: number;
    private 'OS-EXT-IPS-MAC:mac_addr': string | undefined;
    private 'OS-EXT-IPS:type': string | undefined;
    public constructor(addr?: any, version?: any, oSEXTIPSMACMacAddr?: any, oSEXTIPSType?: any) { 
        this['addr'] = addr;
        this['version'] = version;
        this['OS-EXT-IPS-MAC:mac_addr'] = oSEXTIPSMACMacAddr;
        this['OS-EXT-IPS:type'] = oSEXTIPSType;
    }
    public withAddr(addr: string): NovaNetwork {
        this['addr'] = addr;
        return this;
    }
    public withVersion(version: number): NovaNetwork {
        this['version'] = version;
        return this;
    }
    public withOSEXTIPSMACMacAddr(oSEXTIPSMACMacAddr: string): NovaNetwork {
        this['OS-EXT-IPS-MAC:mac_addr'] = oSEXTIPSMACMacAddr;
        return this;
    }
    public set oSEXTIPSMACMacAddr(oSEXTIPSMACMacAddr: string | undefined) {
        this['OS-EXT-IPS-MAC:mac_addr'] = oSEXTIPSMACMacAddr;
    }
    public get oSEXTIPSMACMacAddr() {
        return this['OS-EXT-IPS-MAC:mac_addr'];
    }
    public withOSEXTIPSType(oSEXTIPSType: string): NovaNetwork {
        this['OS-EXT-IPS:type'] = oSEXTIPSType;
        return this;
    }
    public set oSEXTIPSType(oSEXTIPSType: string | undefined) {
        this['OS-EXT-IPS:type'] = oSEXTIPSType;
    }
    public get oSEXTIPSType() {
        return this['OS-EXT-IPS:type'];
    }
}