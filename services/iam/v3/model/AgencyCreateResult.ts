

export class AgencyCreateResult {
    private 'create_time'?: string;
    public description?: string;
    private 'domain_id'?: string;
    public duration?: string;
    private 'expire_time'?: string;
    public id?: string;
    public name?: string;
    private 'trust_domain_id'?: string;
    public constructor(createTime?: string, description?: string, duration?: string, expireTime?: string, id?: string, name?: string) { 
        this['create_time'] = createTime;
        this['description'] = description;
        this['duration'] = duration;
        this['expire_time'] = expireTime;
        this['id'] = id;
        this['name'] = name;
    }
    public withCreateTime(createTime: string): AgencyCreateResult {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withDescription(description: string): AgencyCreateResult {
        this['description'] = description;
        return this;
    }
    public withDomainId(domainId: string): AgencyCreateResult {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withDuration(duration: string): AgencyCreateResult {
        this['duration'] = duration;
        return this;
    }
    public withExpireTime(expireTime: string): AgencyCreateResult {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: string  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): string | undefined {
        return this['expire_time'];
    }
    public withId(id: string): AgencyCreateResult {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AgencyCreateResult {
        this['name'] = name;
        return this;
    }
    public withTrustDomainId(trustDomainId: string): AgencyCreateResult {
        this['trust_domain_id'] = trustDomainId;
        return this;
    }
    public set trustDomainId(trustDomainId: string  | undefined) {
        this['trust_domain_id'] = trustDomainId;
    }
    public get trustDomainId(): string | undefined {
        return this['trust_domain_id'];
    }
}