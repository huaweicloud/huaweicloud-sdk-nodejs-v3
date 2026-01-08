

export class SystemDefaultDnsConfigRequestBody {
    private 'public_dns_record_set_ttl'?: number;
    private 'private_domain_name_enable'?: boolean;
    private 'public_domain_name_enable'?: boolean;
    private 'private_dns_record_set_ttl'?: number;
    public constructor() { 
    }
    public withPublicDnsRecordSetTtl(publicDnsRecordSetTtl: number): SystemDefaultDnsConfigRequestBody {
        this['public_dns_record_set_ttl'] = publicDnsRecordSetTtl;
        return this;
    }
    public set publicDnsRecordSetTtl(publicDnsRecordSetTtl: number  | undefined) {
        this['public_dns_record_set_ttl'] = publicDnsRecordSetTtl;
    }
    public get publicDnsRecordSetTtl(): number | undefined {
        return this['public_dns_record_set_ttl'];
    }
    public withPrivateDomainNameEnable(privateDomainNameEnable: boolean): SystemDefaultDnsConfigRequestBody {
        this['private_domain_name_enable'] = privateDomainNameEnable;
        return this;
    }
    public set privateDomainNameEnable(privateDomainNameEnable: boolean  | undefined) {
        this['private_domain_name_enable'] = privateDomainNameEnable;
    }
    public get privateDomainNameEnable(): boolean | undefined {
        return this['private_domain_name_enable'];
    }
    public withPublicDomainNameEnable(publicDomainNameEnable: boolean): SystemDefaultDnsConfigRequestBody {
        this['public_domain_name_enable'] = publicDomainNameEnable;
        return this;
    }
    public set publicDomainNameEnable(publicDomainNameEnable: boolean  | undefined) {
        this['public_domain_name_enable'] = publicDomainNameEnable;
    }
    public get publicDomainNameEnable(): boolean | undefined {
        return this['public_domain_name_enable'];
    }
    public withPrivateDnsRecordSetTtl(privateDnsRecordSetTtl: number): SystemDefaultDnsConfigRequestBody {
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