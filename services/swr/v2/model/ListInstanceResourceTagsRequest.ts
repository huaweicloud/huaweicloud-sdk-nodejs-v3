

export class ListInstanceResourceTagsRequest {
    private 'resource_type'?: ListInstanceResourceTagsRequestResourceTypeEnum | string;
    private 'resource_id'?: string;
    public constructor(resourceType?: string, resourceId?: string) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
    }
    public withResourceType(resourceType: ListInstanceResourceTagsRequestResourceTypeEnum | string): ListInstanceResourceTagsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ListInstanceResourceTagsRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ListInstanceResourceTagsRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): ListInstanceResourceTagsRequest {
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

/**
    * @export
    * @enum {string}
    */
export enum ListInstanceResourceTagsRequestResourceTypeEnum {
    INSTANCES = 'instances'
}
