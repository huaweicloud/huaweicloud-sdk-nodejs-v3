

export class UserDefinedDnsConfigRequestBody {
    private 'public_domain_name_enable'?: boolean;
    private 'public_dns_zone_name'?: string;
    private 'public_dns_record_set_ttl'?: number;
    private 'private_domain_name_enable'?: boolean;
    private 'private_dns_zone_name'?: string;
    private 'private_dns_zone_type'?: string;
    private 'private_dns_record_set_ttl'?: number;
    public constructor() { 
    }
    public withPublicDomainNameEnable(publicDomainNameEnable: boolean): UserDefinedDnsConfigRequestBody {
        this['public_domain_name_enable'] = publicDomainNameEnable;
        return this;
    }
    public set publicDomainNameEnable(publicDomainNameEnable: boolean  | undefined) {
        this['public_domain_name_enable'] = publicDomainNameEnable;
    }
    public get publicDomainNameEnable(): boolean | undefined {
        return this['public_domain_name_enable'];
    }
    public withPublicDnsZoneName(publicDnsZoneName: string): UserDefinedDnsConfigRequestBody {
        this['public_dns_zone_name'] = publicDnsZoneName;
        return this;
    }
    public set publicDnsZoneName(publicDnsZoneName: string  | undefined) {
        this['public_dns_zone_name'] = publicDnsZoneName;
    }
    public get publicDnsZoneName(): string | undefined {
        return this['public_dns_zone_name'];
    }
    public withPublicDnsRecordSetTtl(publicDnsRecordSetTtl: number): UserDefinedDnsConfigRequestBody {
        this['public_dns_record_set_ttl'] = publicDnsRecordSetTtl;
        return this;
    }
    public set publicDnsRecordSetTtl(publicDnsRecordSetTtl: number  | undefined) {
        this['public_dns_record_set_ttl'] = publicDnsRecordSetTtl;
    }
    public get publicDnsRecordSetTtl(): number | undefined {
        return this['public_dns_record_set_ttl'];
    }
    public withPrivateDomainNameEnable(privateDomainNameEnable: boolean): UserDefinedDnsConfigRequestBody {
        this['private_domain_name_enable'] = privateDomainNameEnable;
        return this;
    }
    public set privateDomainNameEnable(privateDomainNameEnable: boolean  | undefined) {
        this['private_domain_name_enable'] = privateDomainNameEnable;
    }
    public get privateDomainNameEnable(): boolean | undefined {
        return this['private_domain_name_enable'];
    }
    public withPrivateDnsZoneName(privateDnsZoneName: string): UserDefinedDnsConfigRequestBody {
        this['private_dns_zone_name'] = privateDnsZoneName;
        return this;
    }
    public set privateDnsZoneName(privateDnsZoneName: string  | undefined) {
        this['private_dns_zone_name'] = privateDnsZoneName;
    }
    public get privateDnsZoneName(): string | undefined {
        return this['private_dns_zone_name'];
    }
    public withPrivateDnsZoneType(privateDnsZoneType: string): UserDefinedDnsConfigRequestBody {
        this['private_dns_zone_type'] = privateDnsZoneType;
        return this;
    }
    public set privateDnsZoneType(privateDnsZoneType: string  | undefined) {
        this['private_dns_zone_type'] = privateDnsZoneType;
    }
    public get privateDnsZoneType(): string | undefined {
        return this['private_dns_zone_type'];
    }
    public withPrivateDnsRecordSetTtl(privateDnsRecordSetTtl: number): UserDefinedDnsConfigRequestBody {
        this['private_dns_record_set_ttl'] = privateDnsRecordSetTtl;
        return this;
    }
    public set privateDnsRecordSetTtl(privateDnsRecordSetTtl: number  | undefined) {
        this['private_dns_record_set_ttl'] = privateDnsRecordSetTtl;
    }
    public get privateDnsRecordSetTtl(): number | undefined {
        return this['private_dns_record_set_ttl'];
    }
}