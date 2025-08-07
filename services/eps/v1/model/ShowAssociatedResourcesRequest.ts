

export class ShowAssociatedResourcesRequest {
    private 'project_id'?: string;
    private 'region_id'?: string;
    private 'resource_id'?: string;
    private 'resource_type'?: string;
    public constructor(projectId?: string, regionId?: string, resourceId?: string, resourceType?: string) { 
        this['project_id'] = projectId;
        this['region_id'] = regionId;
        this['resource_id'] = resourceId;
        this['resource_type'] = resourceType;
    }
    public withProjectId(projectId: string): ShowAssociatedResourcesRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withRegionId(regionId: string): ShowAssociatedResourcesRequest {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withResourceId(resourceId: string): ShowAssociatedResourcesRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceType(resourceType: string): ShowAssociatedResourcesRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
}