

export class ListTagsForResourceRequest {
    private 'resource_type'?: ListTagsForResourceRequestResourceTypeEnum | string;
    private 'resource_id'?: string;
    public constructor(resourceType?: string, resourceId?: string) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
    }
    public withResourceType(resourceType: ListTagsForResourceRequestResourceTypeEnum | string): ListTagsForResourceRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ListTagsForResourceRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ListTagsForResourceRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): ListTagsForResourceRequest {
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
export enum ListTagsForResourceRequestResourceTypeEnum {
    CONFIGPOLICYASSIGNMENTS = 'config:policyAssignments'
}
