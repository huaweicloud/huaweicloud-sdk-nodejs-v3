

export class CollectAllResourcesSummaryRequest {
    public name?: string;
    public type?: Array<string>;
    private 'region_id'?: Array<string> | undefined;
    private 'ep_id'?: Array<string> | undefined;
    private 'project_id'?: Array<string> | undefined;
    public tags?: Array<string>;
    public constructor() { 
    }
    public withName(name: string): CollectAllResourcesSummaryRequest {
        this['name'] = name;
        return this;
    }
    public withType(type: Array<string>): CollectAllResourcesSummaryRequest {
        this['type'] = type;
        return this;
    }
    public withRegionId(regionId: Array<string>): CollectAllResourcesSummaryRequest {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: Array<string> | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId() {
        return this['region_id'];
    }
    public withEpId(epId: Array<string>): CollectAllResourcesSummaryRequest {
        this['ep_id'] = epId;
        return this;
    }
    public set epId(epId: Array<string> | undefined) {
        this['ep_id'] = epId;
    }
    public get epId() {
        return this['ep_id'];
    }
    public withProjectId(projectId: Array<string>): CollectAllResourcesSummaryRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: Array<string> | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withTags(tags: Array<string>): CollectAllResourcesSummaryRequest {
        this['tags'] = tags;
        return this;
    }
}