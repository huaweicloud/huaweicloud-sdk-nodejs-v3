

export class ShowDomainDetectionRequest {
    private 'zone_id'?: string;
    public type?: string;
    private 'domain_name'?: string;
    public constructor(zoneId?: string, domainName?: string) { 
        this['zone_id'] = zoneId;
        this['domain_name'] = domainName;
    }
    public withZoneId(zoneId: string): ShowDomainDetectionRequest {
        this['zone_id'] = zoneId;
        return this;
    }
    public set zoneId(zoneId: string  | undefined) {
        this['zone_id'] = zoneId;
    }
    public get zoneId(): string | undefined {
        return this['zone_id'];
    }
    public withType(type: string): ShowDomainDetectionRequest {
        this['type'] = type;
        return this;
    }
    public withDomainName(domainName: string): ShowDomainDetectionRequest {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
}