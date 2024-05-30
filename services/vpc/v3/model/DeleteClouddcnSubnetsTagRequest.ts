

export class DeleteClouddcnSubnetsTagRequest {
    private 'resource_id'?: string;
    private 'tag_key'?: string;
    public constructor(resourceId?: string, tagKey?: string) { 
        this['resource_id'] = resourceId;
        this['tag_key'] = tagKey;
    }
    public withResourceId(resourceId: string): DeleteClouddcnSubnetsTagRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withTagKey(tagKey: string): DeleteClouddcnSubnetsTagRequest {
        this['tag_key'] = tagKey;
        return this;
    }
    public set tagKey(tagKey: string  | undefined) {
        this['tag_key'] = tagKey;
    }
    public get tagKey(): string | undefined {
        return this['tag_key'];
    }
}