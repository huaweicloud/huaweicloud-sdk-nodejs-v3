

export class AllowedAddressPair {
    private 'ip_address': string | undefined;
    private 'mac_address'?: string | undefined;
    public constructor(ipAddress?: any) { 
        this['ip_address'] = ipAddress;
    }
    public withIpAddress(ipAddress: string): AllowedAddressPair {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress() {
        return this['ip_address'];
    }
    public withMacAddress(macAddress: string): AllowedAddressPair {
        this['mac_address'] = macAddress;
        return this;
    }
    public set macAddress(macAddress: string | undefined) {
        this['mac_address'] = macAddress;
    }
    public get macAddress() {
        return this['mac_address'];
    }
}