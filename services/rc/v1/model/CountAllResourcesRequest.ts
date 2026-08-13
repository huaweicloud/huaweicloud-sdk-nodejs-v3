

export class CountAllResourcesRequest {
    public id?: string;
    public name?: string;
    public type?: Array<string>;
    private 'region_id'?: Array<string>;
    private 'ep_id'?: Array<string>;
    private 'project_id'?: Array<string>;
    public tags?: Array<string>;
    public constructor() { 
    }
    public withId(id: string): CountAllResourcesRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CountAllResourcesRequest {
        this['name'] = name;
        return this;
    }
    public withType(type: Array<string>): CountAllResourcesRequest {
        this['type'] = type;
        return this;
    }
    public withRegionId(regionId: Array<string>): CountAllResourcesRequest {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: Array<string>  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): Array<string> | undefined {
        return this['region_id'];
    }
    public withEpId(epId: Array<string>): CountAllResourcesRequest {
        this['ep_id'] = epId;
        return this;
    }
    public set epId(epId: Array<string>  | undefined) {
        this['ep_id'] = epId;
    }
    public get epId(): Array<string> | undefined {
        return this['ep_id'];
    }
    public withProjectId(projectId: Array<string>): CountAllResourcesRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: Array<string>  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): Array<string> | undefined {
        return this['project_id'];
    }
    public withTags(tags: Array<string>): CountAllResourcesRequest {
        this['tags'] = tags;
        return this;
    }
}