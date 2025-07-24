

export class DnsMappingNode {
    private 'domain_name'?: string;
    public ips?: Array<string>;
    public constructor() { 
    }
    public withDomainName(domainName: string): DnsMappingNode {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withIps(ips: Array<string>): DnsMappingNode {
        this['ips'] = ips;
        return this;
    }
}