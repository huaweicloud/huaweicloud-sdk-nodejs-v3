

export class DeleteTagRequest {
    private 'resource_id'?: string;
    private 'tag_key'?: string;
    private 'resource_type'?: DeleteTagRequestResourceTypeEnum | string;
    public constructor(resourceId?: string, tagKey?: string, resourceType?: string) { 
        this['resource_id'] = resourceId;
        this['tag_key'] = tagKey;
        this['resource_type'] = resourceType;
    }
    public withResourceId(resourceId: string): DeleteTagRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withTagKey(tagKey: string): DeleteTagRequest {
        this['tag_key'] = tagKey;
        return this;
    }
    public set tagKey(tagKey: string  | undefined) {
        this['tag_key'] = tagKey;
    }
    public get tagKey(): string | undefined {
        return this['tag_key'];
    }
    public withResourceType(resourceType: DeleteTagRequestResourceTypeEnum | string): DeleteTagRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: DeleteTagRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): DeleteTagRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteTagRequestResourceTypeEnum {
    CLOUD_CONNECTION = 'cloud-connection',
    BANDWIDTH_PACKAGE = 'bandwidth-package'
}
