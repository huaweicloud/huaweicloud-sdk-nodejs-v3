

export class AgencyResult {
    private 'create_time'?: string;
    public description?: string;
    private 'domain_id'?: string;
    private 'expire_time'?: string;
    public id?: string;
    public name?: string;
    private 'trust_domain_id'?: string;
    private 'trust_domain_name'?: string;
    public constructor(createTime?: string, description?: string, expireTime?: string, id?: string, name?: string) { 
        this['create_time'] = createTime;
        this['description'] = description;
        this['expire_time'] = expireTime;
        this['id'] = id;
        this['name'] = name;
    }
    public withCreateTime(createTime: string): AgencyResult {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withDescription(description: string): AgencyResult {
        this['description'] = description;
        return this;
    }
    public withDomainId(domainId: string): AgencyResult {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withExpireTime(expireTime: string): AgencyResult {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: string  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): string | undefined {
        return this['expire_time'];
    }
    public withId(id: string): AgencyResult {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AgencyResult {
        this['name'] = name;
        return this;
    }
    public withTrustDomainId(trustDomainId: string): AgencyResult {
        this['trust_domain_id'] = trustDomainId;
        return this;
    }
    public set trustDomainId(trustDomainId: string  | undefined) {
        this['trust_domain_id'] = trustDomainId;
    }
    public get trustDomainId(): string | undefined {
        return this['trust_domain_id'];
    }
    public withTrustDomainName(trustDomainName: string): AgencyResult {
        this['trust_domain_name'] = trustDomainName;
        return this;
    }
    public set trustDomainName(trustDomainName: string  | undefined) {
        this['trust_domain_name'] = trustDomainName;
    }
    public get trustDomainName(): string | undefined {
        return this['trust_domain_name'];
    }
}