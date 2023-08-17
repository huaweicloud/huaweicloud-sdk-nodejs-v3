

export class CreateDnsNameReq {
    private 'dns_type'?: string;
    public constructor(dnsType?: string) { 
        this['dns_type'] = dnsType;
    }
    public withDnsType(dnsType: string): CreateDnsNameReq {
        this['dns_type'] = dnsType;
        return this;
    }
    public set dnsType(dnsType: string  | undefined) {
        this['dns_type'] = dnsType;
    }
    public get dnsType(): string | undefined {
        return this['dns_type'];
    }
}