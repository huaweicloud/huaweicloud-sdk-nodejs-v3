

export class GetResourceTagsRequest {
    private 'Content-Type'?: string;
    private 'resource_type'?: GetResourceTagsRequestResourceTypeEnum | string;
    private 'resource_id'?: string;
    public constructor(contentType?: string, resourceType?: string, resourceId?: string) { 
        this['Content-Type'] = contentType;
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
    }
    public withContentType(contentType: string): GetResourceTagsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withResourceType(resourceType: GetResourceTagsRequestResourceTypeEnum | string): GetResourceTagsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: GetResourceTagsRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): GetResourceTagsRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): GetResourceTagsRequest {
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
export enum GetResourceTagsRequestResourceTypeEnum {
    CCE_CLUSTER = 'cce-cluster'
}
