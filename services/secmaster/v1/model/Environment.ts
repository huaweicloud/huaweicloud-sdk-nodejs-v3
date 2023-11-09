

export class Environment {
    public type?: string;
    private 'domain_id'?: string;
    private 'project_id'?: string;
    private 'region_id'?: string;
    public constructor(type?: string, domainId?: string) { 
        this['type'] = type;
        this['domain_id'] = domainId;
    }
    public withType(type: string): Environment {
        this['type'] = type;
        return this;
    }
    public withDomainId(domainId: string): Environment {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withProjectId(projectId: string): Environment {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withRegionId(regionId: string): Environment {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
}