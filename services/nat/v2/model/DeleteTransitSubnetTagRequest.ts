

export class DeleteTransitSubnetTagRequest {
    public key?: string;
    private 'resource_id'?: string;
    public constructor(key?: string, resourceId?: string) { 
        this['key'] = key;
        this['resource_id'] = resourceId;
    }
    public withKey(key: string): DeleteTransitSubnetTagRequest {
        this['key'] = key;
        return this;
    }
    public withResourceId(resourceId: string): DeleteTransitSubnetTagRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
}