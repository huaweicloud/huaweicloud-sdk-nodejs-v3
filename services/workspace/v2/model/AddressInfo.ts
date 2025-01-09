

export class AddressInfo {
    public addr?: string;
    public version?: string;
    private 'OS-EXT-IPS-MAC:mac_addr'?: string;
    private 'OS-EXT-IPS:type'?: string;
    public constructor() { 
    }
    public withAddr(addr: string): AddressInfo {
        this['addr'] = addr;
        return this;
    }
    public withVersion(version: string): AddressInfo {
        this['version'] = version;
        return this;
    }
    public withOSEXTIPSMACMacAddr(oSEXTIPSMACMacAddr: string): AddressInfo {
        this['OS-EXT-IPS-MAC:mac_addr'] = oSEXTIPSMACMacAddr;
        return this;
    }
    public set oSEXTIPSMACMacAddr(oSEXTIPSMACMacAddr: string  | undefined) {
        this['OS-EXT-IPS-MAC:mac_addr'] = oSEXTIPSMACMacAddr;
    }
    public get oSEXTIPSMACMacAddr(): string | undefined {
        return this['OS-EXT-IPS-MAC:mac_addr'];
    }
    public withOSEXTIPSType(oSEXTIPSType: string): AddressInfo {
        this['OS-EXT-IPS:type'] = oSEXTIPSType;
        return this;
    }
    public set oSEXTIPSType(oSEXTIPSType: string  | undefined) {
        this['OS-EXT-IPS:type'] = oSEXTIPSType;
    }
    public get oSEXTIPSType(): string | undefined {
        return this['OS-EXT-IPS:type'];
    }
}