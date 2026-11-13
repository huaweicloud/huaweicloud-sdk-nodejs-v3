

export class ListResourceAssociationsRequest {
    private 'resource_id'?: Array<string>;
    private 'resource_type'?: Array<string>;
    private 'resource_project_id'?: string;
    private 'instance_id'?: Array<string>;
    private 'instance_type'?: Array<string>;
    private 'instance_project_id'?: string;
    public constructor() { 
    }
    public withResourceId(resourceId: Array<string>): ListResourceAssociationsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: Array<string>  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): Array<string> | undefined {
        return this['resource_id'];
    }
    public withResourceType(resourceType: Array<string>): ListResourceAssociationsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: Array<string>  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): Array<string> | undefined {
        return this['resource_type'];
    }
    public withResourceProjectId(resourceProjectId: string): ListResourceAssociationsRequest {
        this['resource_project_id'] = resourceProjectId;
        return this;
    }
    public set resourceProjectId(resourceProjectId: string  | undefined) {
        this['resource_project_id'] = resourceProjectId;
    }
    public get resourceProjectId(): string | undefined {
        return this['resource_project_id'];
    }
    public withInstanceId(instanceId: Array<string>): ListResourceAssociationsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: Array<string>  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): Array<string> | undefined {
        return this['instance_id'];
    }
    public withInstanceType(instanceType: Array<string>): ListResourceAssociationsRequest {
        this['instance_type'] = instanceType;
        return this;
    }
    public set instanceType(instanceType: Array<string>  | undefined) {
        this['instance_type'] = instanceType;
    }
    public get instanceType(): Array<string> | undefined {
        return this['instance_type'];
    }
    public withInstanceProjectId(instanceProjectId: string): ListResourceAssociationsRequest {
        this['instance_project_id'] = instanceProjectId;
        return this;
    }
    public set instanceProjectId(instanceProjectId: string  | undefined) {
        this['instance_project_id'] = instanceProjectId;
    }
    public get instanceProjectId(): string | undefined {
        return this['instance_project_id'];
    }
}