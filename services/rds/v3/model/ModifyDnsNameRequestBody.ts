

export class ModifyDnsNameRequestBody {
    private 'dns_name'?: string;
    public constructor(dnsName?: string) { 
        this['dns_name'] = dnsName;
    }
    public withDnsName(dnsName: string): ModifyDnsNameRequestBody {
        this['dns_name'] = dnsName;
        return this;
    }
    public set dnsName(dnsName: string  | undefined) {
        this['dns_name'] = dnsName;
    }
    public get dnsName(): string | undefined {
        return this['dns_name'];
    }
}