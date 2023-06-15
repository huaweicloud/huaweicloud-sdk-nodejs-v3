

export class DeleteDomainMappingRequest {
    private 'pull_domain': string | undefined;
    private 'push_domain': string | undefined;
    public constructor(pullDomain?: any, pushDomain?: any) { 
        this['pull_domain'] = pullDomain;
        this['push_domain'] = pushDomain;
    }
    public withPullDomain(pullDomain: string): DeleteDomainMappingRequest {
        this['pull_domain'] = pullDomain;
        return this;
    }
    public set pullDomain(pullDomain: string | undefined) {
        this['pull_domain'] = pullDomain;
    }
    public get pullDomain() {
        return this['pull_domain'];
    }
    public withPushDomain(pushDomain: string): DeleteDomainMappingRequest {
        this['push_domain'] = pushDomain;
        return this;
    }
    public set pushDomain(pushDomain: string | undefined) {
        this['push_domain'] = pushDomain;
    }
    public get pushDomain() {
        return this['push_domain'];
    }
}