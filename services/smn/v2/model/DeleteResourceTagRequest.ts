

export class DeleteResourceTagRequest {
    private 'resource_type': string | undefined;
    private 'resource_id': string | undefined;
    public key: string;
    public constructor(resourceType?: any, resourceId?: any, key?: any) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
        this['key'] = key;
    }
    public withResourceType(resourceType: string): DeleteResourceTagRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): DeleteResourceTagRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withKey(key: string): DeleteResourceTagRequest {
        this['key'] = key;
        return this;
    }
}