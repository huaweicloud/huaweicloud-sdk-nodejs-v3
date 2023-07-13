

export class AgencyResult {
    private 'create_time': string | undefined;
    public description: string;
    private 'domain_id'?: string | undefined;
    public duration: string;
    private 'expire_time': string | undefined;
    public id: string;
    public name: string;
    private 'trust_domain_id'?: string | undefined;
    private 'trust_domain_name'?: string | undefined;
    public constructor(createTime?: any, description?: any, duration?: any, expireTime?: any, id?: any, name?: any) { 
        this['create_time'] = createTime;
        this['description'] = description;
        this['duration'] = duration;
        this['expire_time'] = expireTime;
        this['id'] = id;
        this['name'] = name;
    }
    public withCreateTime(createTime: string): AgencyResult {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
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
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withDuration(duration: string): AgencyResult {
        this['duration'] = duration;
        return this;
    }
    public withExpireTime(expireTime: string): AgencyResult {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: string | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime() {
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
    public set trustDomainId(trustDomainId: string | undefined) {
        this['trust_domain_id'] = trustDomainId;
    }
    public get trustDomainId() {
        return this['trust_domain_id'];
    }
    public withTrustDomainName(trustDomainName: string): AgencyResult {
        this['trust_domain_name'] = trustDomainName;
        return this;
    }
    public set trustDomainName(trustDomainName: string | undefined) {
        this['trust_domain_name'] = trustDomainName;
    }
    public get trustDomainName() {
        return this['trust_domain_name'];
    }
}