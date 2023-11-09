

export class Resource {
    public id?: string;
    public name?: string;
    public type?: string;
    public provider?: string;
    private 'region_id'?: string;
    private 'domain_id'?: string;
    private 'project_id'?: string;
    private 'ep_id'?: string;
    private 'ep_name'?: string;
    public tags?: object;
    public constructor(id?: string, name?: string, type?: string, provider?: string, domainId?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['type'] = type;
        this['provider'] = provider;
        this['domain_id'] = domainId;
    }
    public withId(id: string): Resource {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Resource {
        this['name'] = name;
        return this;
    }
    public withType(type: string): Resource {
        this['type'] = type;
        return this;
    }
    public withProvider(provider: string): Resource {
        this['provider'] = provider;
        return this;
    }
    public withRegionId(regionId: string): Resource {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withDomainId(domainId: string): Resource {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withProjectId(projectId: string): Resource {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withEpId(epId: string): Resource {
        this['ep_id'] = epId;
        return this;
    }
    public set epId(epId: string  | undefined) {
        this['ep_id'] = epId;
    }
    public get epId(): string | undefined {
        return this['ep_id'];
    }
    public withEpName(epName: string): Resource {
        this['ep_name'] = epName;
        return this;
    }
    public set epName(epName: string  | undefined) {
        this['ep_name'] = epName;
    }
    public get epName(): string | undefined {
        return this['ep_name'];
    }
    public withTags(tags: object): Resource {
        this['tags'] = tags;
        return this;
    }
}