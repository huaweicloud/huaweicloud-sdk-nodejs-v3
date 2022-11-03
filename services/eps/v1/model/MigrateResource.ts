

export class MigrateResource {
    private 'region_id'?: string | undefined;
    private 'project_id'?: string | undefined;
    private 'resource_id': string | undefined;
    private 'resource_type': string | undefined;
    public associated?: boolean;
    public constructor(resourceId?: any, resourceType?: any) { 
        this['resource_id'] = resourceId;
        this['resource_type'] = resourceType;
    }
    public withRegionId(regionId: string): MigrateResource {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId() {
        return this['region_id'];
    }
    public withProjectId(projectId: string): MigrateResource {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withResourceId(resourceId: string): MigrateResource {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withResourceType(resourceType: string): MigrateResource {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
    public withAssociated(associated: boolean): MigrateResource {
        this['associated'] = associated;
        return this;
    }
}