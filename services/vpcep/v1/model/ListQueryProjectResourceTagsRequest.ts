

export class ListQueryProjectResourceTagsRequest {
    private 'resource_type'?: ListQueryProjectResourceTagsRequestResourceTypeEnum | string;
    private 'Content-Type'?: string;
    public constructor(resourceType?: string) { 
        this['resource_type'] = resourceType;
    }
    public withResourceType(resourceType: ListQueryProjectResourceTagsRequestResourceTypeEnum | string): ListQueryProjectResourceTagsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ListQueryProjectResourceTagsRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ListQueryProjectResourceTagsRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withContentType(contentType: string): ListQueryProjectResourceTagsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListQueryProjectResourceTagsRequestResourceTypeEnum {
    ENDPOINT_SERVICE = 'endpoint_service',
    ENDPOINT = 'endpoint'
}
