

export class RespAddr {
    public addr?: string;
    public version?: number;
    private 'OS-EXT-IPS:type'?: string;
    private 'OS-EXT-IPS-MAC:mac_addr'?: string;
    public constructor(addr?: string, version?: number) { 
        this['addr'] = addr;
        this['version'] = version;
    }
    public withAddr(addr: string): RespAddr {
        this['addr'] = addr;
        return this;
    }
    public withVersion(version: number): RespAddr {
        this['version'] = version;
        return this;
    }
    public withOSEXTIPSType(oSEXTIPSType: string): RespAddr {
        this['OS-EXT-IPS:type'] = oSEXTIPSType;
        return this;
    }
    public set oSEXTIPSType(oSEXTIPSType: string  | undefined) {
        this['OS-EXT-IPS:type'] = oSEXTIPSType;
    }
    public get oSEXTIPSType(): string | undefined {
        return this['OS-EXT-IPS:type'];
    }
    public withOSEXTIPSMACMacAddr(oSEXTIPSMACMacAddr: string): RespAddr {
        this['OS-EXT-IPS-MAC:mac_addr'] = oSEXTIPSMACMacAddr;
        return this;
    }
    public set oSEXTIPSMACMacAddr(oSEXTIPSMACMacAddr: string  | undefined) {
        this['OS-EXT-IPS-MAC:mac_addr'] = oSEXTIPSMACMacAddr;
    }
    public get oSEXTIPSMACMacAddr(): string | undefined {
        return this['OS-EXT-IPS-MAC:mac_addr'];
    }
}