

export class InstanceDomainId {
    private 'instance_domain_id'?: string;
    public constructor() { 
    }
    public withInstanceDomainId(instanceDomainId: string): InstanceDomainId {
        this['instance_domain_id'] = instanceDomainId;
        return this;
    }
    public set instanceDomainId(instanceDomainId: string  | undefined) {
        this['instance_domain_id'] = instanceDomainId;
    }
    public get instanceDomainId(): string | undefined {
        return this['instance_domain_id'];
    }
}