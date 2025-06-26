

export class ListSubResourceTagsRequest {
    private 'resource_type'?: ListSubResourceTagsRequestResourceTypeEnum | string;
    private 'resource_id'?: string;
    private 'sub_resource_type'?: ListSubResourceTagsRequestSubResourceTypeEnum | string;
    private 'sub_resource_id'?: string;
    public constructor(resourceType?: string, resourceId?: string, subResourceType?: string, subResourceId?: string) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
        this['sub_resource_type'] = subResourceType;
        this['sub_resource_id'] = subResourceId;
    }
    public withResourceType(resourceType: ListSubResourceTagsRequestResourceTypeEnum | string): ListSubResourceTagsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ListSubResourceTagsRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ListSubResourceTagsRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): ListSubResourceTagsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withSubResourceType(subResourceType: ListSubResourceTagsRequestSubResourceTypeEnum | string): ListSubResourceTagsRequest {
        this['sub_resource_type'] = subResourceType;
        return this;
    }
    public set subResourceType(subResourceType: ListSubResourceTagsRequestSubResourceTypeEnum | string  | undefined) {
        this['sub_resource_type'] = subResourceType;
    }
    public get subResourceType(): ListSubResourceTagsRequestSubResourceTypeEnum | string | undefined {
        return this['sub_resource_type'];
    }
    public withSubResourceId(subResourceId: string): ListSubResourceTagsRequest {
        this['sub_resource_id'] = subResourceId;
        return this;
    }
    public set subResourceId(subResourceId: string  | undefined) {
        this['sub_resource_id'] = subResourceId;
    }
    public get subResourceId(): string | undefined {
        return this['sub_resource_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSubResourceTagsRequestResourceTypeEnum {
    INSTANCES = 'instances'
}
/**
    * @export
    * @enum {string}
    */
export enum ListSubResourceTagsRequestSubResourceTypeEnum {
    NAMESPACES = 'namespaces'
}
