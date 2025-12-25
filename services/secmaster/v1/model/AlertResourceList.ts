

export class AlertResourceList {
    public id?: string;
    public name?: string;
    public type?: string;
    public provider?: string;
    private 'region_id'?: string;
    private 'domain_id'?: string;
    private 'project_id'?: string;
    private 'ep_id'?: string;
    private 'ep_name'?: string;
    public tags?: string;
    public constructor() { 
    }
    public withId(id: string): AlertResourceList {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AlertResourceList {
        this['name'] = name;
        return this;
    }
    public withType(type: string): AlertResourceList {
        this['type'] = type;
        return this;
    }
    public withProvider(provider: string): AlertResourceList {
        this['provider'] = provider;
        return this;
    }
    public withRegionId(regionId: string): AlertResourceList {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withDomainId(domainId: string): AlertResourceList {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withProjectId(projectId: string): AlertResourceList {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withEpId(epId: string): AlertResourceList {
        this['ep_id'] = epId;
        return this;
    }
    public set epId(epId: string  | undefined) {
        this['ep_id'] = epId;
    }
    public get epId(): string | undefined {
        return this['ep_id'];
    }
    public withEpName(epName: string): AlertResourceList {
        this['ep_name'] = epName;
        return this;
    }
    public set epName(epName: string  | undefined) {
        this['ep_name'] = epName;
    }
    public get epName(): string | undefined {
        return this['ep_name'];
    }
    public withTags(tags: string): AlertResourceList {
        this['tags'] = tags;
        return this;
    }
}