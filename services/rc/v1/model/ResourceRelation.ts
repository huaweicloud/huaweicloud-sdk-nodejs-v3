

export class ResourceRelation {
    private 'resource_id'?: string;
    private 'resource_type'?: string;
    private 'related_resource_type'?: string;
    private 'related_resource_id'?: string;
    public constructor() { 
    }
    public withResourceId(resourceId: string): ResourceRelation {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceType(resourceType: string): ResourceRelation {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withRelatedResourceType(relatedResourceType: string): ResourceRelation {
        this['related_resource_type'] = relatedResourceType;
        return this;
    }
    public set relatedResourceType(relatedResourceType: string  | undefined) {
        this['related_resource_type'] = relatedResourceType;
    }
    public get relatedResourceType(): string | undefined {
        return this['related_resource_type'];
    }
    public withRelatedResourceId(relatedResourceId: string): ResourceRelation {
        this['related_resource_id'] = relatedResourceId;
        return this;
    }
    public set relatedResourceId(relatedResourceId: string  | undefined) {
        this['related_resource_id'] = relatedResourceId;
    }
    public get relatedResourceId(): string | undefined {
        return this['related_resource_id'];
    }
}