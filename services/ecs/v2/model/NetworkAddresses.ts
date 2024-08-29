

export class NetworkAddresses {
    public addr?: string;
    public version?: NetworkAddressesVersionEnum | number;
    private 'OS-EXT-IPS:port_id'?: string;
    private 'OS-EXT-IPS-MAC:mac_addr'?: string;
    private 'OS-EXT-IPS:type'?: string;
    public constructor(addr?: string, version?: number, oSEXTIPSPortId?: string, oSEXTIPSMACMacAddr?: string, oSEXTIPSType?: string) { 
        this['addr'] = addr;
        this['version'] = version;
        this['OS-EXT-IPS:port_id'] = oSEXTIPSPortId;
        this['OS-EXT-IPS-MAC:mac_addr'] = oSEXTIPSMACMacAddr;
        this['OS-EXT-IPS:type'] = oSEXTIPSType;
    }
    public withAddr(addr: string): NetworkAddresses {
        this['addr'] = addr;
        return this;
    }
    public withVersion(version: NetworkAddressesVersionEnum | number): NetworkAddresses {
        this['version'] = version;
        return this;
    }
    public withOSEXTIPSPortId(oSEXTIPSPortId: string): NetworkAddresses {
        this['OS-EXT-IPS:port_id'] = oSEXTIPSPortId;
        return this;
    }
    public set oSEXTIPSPortId(oSEXTIPSPortId: string  | undefined) {
        this['OS-EXT-IPS:port_id'] = oSEXTIPSPortId;
    }
    public get oSEXTIPSPortId(): string | undefined {
        return this['OS-EXT-IPS:port_id'];
    }
    public withOSEXTIPSMACMacAddr(oSEXTIPSMACMacAddr: string): NetworkAddresses {
        this['OS-EXT-IPS-MAC:mac_addr'] = oSEXTIPSMACMacAddr;
        return this;
    }
    public set oSEXTIPSMACMacAddr(oSEXTIPSMACMacAddr: string  | undefined) {
        this['OS-EXT-IPS-MAC:mac_addr'] = oSEXTIPSMACMacAddr;
    }
    public get oSEXTIPSMACMacAddr(): string | undefined {
        return this['OS-EXT-IPS-MAC:mac_addr'];
    }
    public withOSEXTIPSType(oSEXTIPSType: string): NetworkAddresses {
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

/**
    * @export
    * @enum {string}
    */
export enum NetworkAddressesVersionEnum {
    NUMBER_4 = 4,
    NUMBER_6 = 6
}
