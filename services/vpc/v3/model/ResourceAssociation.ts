

export class ResourceAssociation {
    public id?: string;
    private 'resource_id'?: string;
    private 'resource_type'?: string;
    private 'resource_project_id'?: string;
    private 'instance_id'?: string;
    private 'instance_type'?: string;
    private 'instance_project_id'?: string;
    public constructor(id?: string, resourceId?: string, resourceType?: string, resourceProjectId?: string, instanceId?: string, instanceType?: string, instanceProjectId?: string) { 
        this['id'] = id;
        this['resource_id'] = resourceId;
        this['resource_type'] = resourceType;
        this['resource_project_id'] = resourceProjectId;
        this['instance_id'] = instanceId;
        this['instance_type'] = instanceType;
        this['instance_project_id'] = instanceProjectId;
    }
    public withId(id: string): ResourceAssociation {
        this['id'] = id;
        return this;
    }
    public withResourceId(resourceId: string): ResourceAssociation {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceType(resourceType: string): ResourceAssociation {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withResourceProjectId(resourceProjectId: string): ResourceAssociation {
        this['resource_project_id'] = resourceProjectId;
        return this;
    }
    public set resourceProjectId(resourceProjectId: string  | undefined) {
        this['resource_project_id'] = resourceProjectId;
    }
    public get resourceProjectId(): string | undefined {
        return this['resource_project_id'];
    }
    public withInstanceId(instanceId: string): ResourceAssociation {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceType(instanceType: string): ResourceAssociation {
        this['instance_type'] = instanceType;
        return this;
    }
    public set instanceType(instanceType: string  | undefined) {
        this['instance_type'] = instanceType;
    }
    public get instanceType(): string | undefined {
        return this['instance_type'];
    }
    public withInstanceProjectId(instanceProjectId: string): ResourceAssociation {
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