

export class Resources {
    private 'project_id': string | undefined;
    private 'project_name': string | undefined;
    private 'resource_detail'?: object | undefined;
    private 'resource_id': string | undefined;
    private 'resource_name': string | undefined;
    private 'resource_type': string | undefined;
    public constructor(projectId?: any, projectName?: any, resourceId?: any, resourceName?: any, resourceType?: any) { 
        this['project_id'] = projectId;
        this['project_name'] = projectName;
        this['resource_id'] = resourceId;
        this['resource_name'] = resourceName;
        this['resource_type'] = resourceType;
    }
    public withProjectId(projectId: string): Resources {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withProjectName(projectName: string): Resources {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName() {
        return this['project_name'];
    }
    public withResourceDetail(resourceDetail: object): Resources {
        this['resource_detail'] = resourceDetail;
        return this;
    }
    public set resourceDetail(resourceDetail: object | undefined) {
        this['resource_detail'] = resourceDetail;
    }
    public get resourceDetail() {
        return this['resource_detail'];
    }
    public withResourceId(resourceId: string): Resources {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withResourceName(resourceName: string): Resources {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName() {
        return this['resource_name'];
    }
    public withResourceType(resourceType: string): Resources {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
}