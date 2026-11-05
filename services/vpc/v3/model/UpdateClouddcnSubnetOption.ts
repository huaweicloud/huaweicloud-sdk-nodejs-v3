

export class UpdateClouddcnSubnetOption {
    public name?: string;
    public description?: string;
    private 'dns_nameservers'?: Array<string>;
    public constructor() { 
    }
    public withName(name: string): UpdateClouddcnSubnetOption {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateClouddcnSubnetOption {
        this['description'] = description;
        return this;
    }
    public withDnsNameservers(dnsNameservers: Array<string>): UpdateClouddcnSubnetOption {
        this['dns_nameservers'] = dnsNameservers;
        return this;
    }
    public set dnsNameservers(dnsNameservers: Array<string>  | undefined) {
        this['dns_nameservers'] = dnsNameservers;
    }
    public get dnsNameservers(): Array<string> | undefined {
        return this['dns_nameservers'];
    }
}