

export class Quotas {
    private 'quota_limit'?: number | undefined;
    public type?: string;
    public used?: number;
    private 'user_domain_id'?: string | undefined;
    public constructor() { 
    }
    public withQuotaLimit(quotaLimit: number): Quotas {
        this['quota_limit'] = quotaLimit;
        return this;
    }
    public set quotaLimit(quotaLimit: number | undefined) {
        this['quota_limit'] = quotaLimit;
    }
    public get quotaLimit() {
        return this['quota_limit'];
    }
    public withType(type: string): Quotas {
        this['type'] = type;
        return this;
    }
    public withUsed(used: number): Quotas {
        this['used'] = used;
        return this;
    }
    public withUserDomainId(userDomainId: string): Quotas {
        this['user_domain_id'] = userDomainId;
        return this;
    }
    public set userDomainId(userDomainId: string | undefined) {
        this['user_domain_id'] = userDomainId;
    }
    public get userDomainId() {
        return this['user_domain_id'];
    }
}