

export class AllowedAddressPair {
    private 'ip_address'?: string;
    private 'mac_address'?: string;
    public constructor() { 
    }
    public withIpAddress(ipAddress: string): AllowedAddressPair {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): string | undefined {
        return this['ip_address'];
    }
    public withMacAddress(macAddress: string): AllowedAddressPair {
        this['mac_address'] = macAddress;
        return this;
    }
    public set macAddress(macAddress: string  | undefined) {
        this['mac_address'] = macAddress;
    }
    public get macAddress(): string | undefined {
        return this['mac_address'];
    }
}