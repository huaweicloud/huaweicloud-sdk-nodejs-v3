

export class CreateAddressGroupOption {
    public name: string;
    public description?: string;
    private 'ip_version': number | undefined;
    private 'ip_set'?: Array<string> | undefined;
    public constructor(name?: any, ipVersion?: any) { 
        this['name'] = name;
        this['ip_version'] = ipVersion;
    }
    public withName(name: string): CreateAddressGroupOption {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateAddressGroupOption {
        this['description'] = description;
        return this;
    }
    public withIpVersion(ipVersion: number): CreateAddressGroupOption {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: number | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion() {
        return this['ip_version'];
    }
    public withIpSet(ipSet: Array<string>): CreateAddressGroupOption {
        this['ip_set'] = ipSet;
        return this;
    }
    public set ipSet(ipSet: Array<string> | undefined) {
        this['ip_set'] = ipSet;
    }
    public get ipSet() {
        return this['ip_set'];
    }
}