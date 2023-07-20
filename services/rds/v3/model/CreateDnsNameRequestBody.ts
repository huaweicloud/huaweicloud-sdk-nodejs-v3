

export class CreateDnsNameRequestBody {
    private 'dns_type'?: string;
    public constructor(dnsType?: string) { 
        this['dns_type'] = dnsType;
    }
    public withDnsType(dnsType: string): CreateDnsNameRequestBody {
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