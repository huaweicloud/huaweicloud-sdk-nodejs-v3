

export class ShowDnsNameRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: string;
    private 'dns_type'?: string;
    public constructor(instanceId?: string, dnsType?: string) { 
        this['instance_id'] = instanceId;
        this['dns_type'] = dnsType;
    }
    public withInstanceId(instanceId: string): ShowDnsNameRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: string): ShowDnsNameRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withDnsType(dnsType: string): ShowDnsNameRequest {
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