

export class DeleteResourceTagRequest {
    private 'resource_type'?: string;
    private 'resource_id'?: string;
    public key?: string;
    public constructor(resourceType?: string, resourceId?: string, key?: string) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
        this['key'] = key;
    }
    public withResourceType(resourceType: string): DeleteResourceTagRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): DeleteResourceTagRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withKey(key: string): DeleteResourceTagRequest {
        this['key'] = key;
        return this;
    }
}