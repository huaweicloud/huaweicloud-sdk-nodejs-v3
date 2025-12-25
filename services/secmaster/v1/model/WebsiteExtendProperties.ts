

export class WebsiteExtendProperties {
    private 'mac_addr'?: string;
    public constructor() { 
    }
    public withMacAddr(macAddr: string): WebsiteExtendProperties {
        this['mac_addr'] = macAddr;
        return this;
    }
    public set macAddr(macAddr: string  | undefined) {
        this['mac_addr'] = macAddr;
    }
    public get macAddr(): string | undefined {
        return this['mac_addr'];
    }
}