

export class DomainMapping {
    private 'pull_domain'?: string;
    private 'push_domain'?: string;
    public constructor(pullDomain?: string, pushDomain?: string) { 
        this['pull_domain'] = pullDomain;
        this['push_domain'] = pushDomain;
    }
    public withPullDomain(pullDomain: string): DomainMapping {
        this['pull_domain'] = pullDomain;
        return this;
    }
    public set pullDomain(pullDomain: string  | undefined) {
        this['pull_domain'] = pullDomain;
    }
    public get pullDomain(): string | undefined {
        return this['pull_domain'];
    }
    public withPushDomain(pushDomain: string): DomainMapping {
        this['push_domain'] = pushDomain;
        return this;
    }
    public set pushDomain(pushDomain: string  | undefined) {
        this['push_domain'] = pushDomain;
    }
    public get pushDomain(): string | undefined {
        return this['push_domain'];
    }
}