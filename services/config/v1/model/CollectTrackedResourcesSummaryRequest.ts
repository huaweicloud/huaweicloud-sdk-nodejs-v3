

export class CollectTrackedResourcesSummaryRequest {
    public name?: string;
    public type?: Array<string>;
    private 'region_id'?: Array<string>;
    private 'ep_id'?: Array<string>;
    private 'project_id'?: Array<string>;
    public tags?: Array<string>;
    private 'resource_deleted'?: boolean;
    public constructor() { 
    }
    public withName(name: string): CollectTrackedResourcesSummaryRequest {
        this['name'] = name;
        return this;
    }
    public withType(type: Array<string>): CollectTrackedResourcesSummaryRequest {
        this['type'] = type;
        return this;
    }
    public withRegionId(regionId: Array<string>): CollectTrackedResourcesSummaryRequest {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: Array<string>  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): Array<string> | undefined {
        return this['region_id'];
    }
    public withEpId(epId: Array<string>): CollectTrackedResourcesSummaryRequest {
        this['ep_id'] = epId;
        return this;
    }
    public set epId(epId: Array<string>  | undefined) {
        this['ep_id'] = epId;
    }
    public get epId(): Array<string> | undefined {
        return this['ep_id'];
    }
    public withProjectId(projectId: Array<string>): CollectTrackedResourcesSummaryRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: Array<string>  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): Array<string> | undefined {
        return this['project_id'];
    }
    public withTags(tags: Array<string>): CollectTrackedResourcesSummaryRequest {
        this['tags'] = tags;
        return this;
    }
    public withResourceDeleted(resourceDeleted: boolean): CollectTrackedResourcesSummaryRequest {
        this['resource_deleted'] = resourceDeleted;
        return this;
    }
    public set resourceDeleted(resourceDeleted: boolean  | undefined) {
        this['resource_deleted'] = resourceDeleted;
    }
    public get resourceDeleted(): boolean | undefined {
        return this['resource_deleted'];
    }
}