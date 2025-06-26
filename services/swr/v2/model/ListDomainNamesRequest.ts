

export class ListDomainNamesRequest {
    private 'instance_id'?: string;
    public uid?: string;
    private 'domain_name'?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListDomainNamesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withUid(uid: string): ListDomainNamesRequest {
        this['uid'] = uid;
        return this;
    }
    public withDomainName(domainName: string): ListDomainNamesRequest {
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