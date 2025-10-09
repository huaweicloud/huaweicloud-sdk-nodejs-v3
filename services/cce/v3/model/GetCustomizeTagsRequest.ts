

export class GetCustomizeTagsRequest {
    private 'Content-Type'?: string;
    private 'resource_type'?: GetCustomizeTagsRequestResourceTypeEnum | string;
    public constructor(contentType?: string, resourceType?: string) { 
        this['Content-Type'] = contentType;
        this['resource_type'] = resourceType;
    }
    public withContentType(contentType: string): GetCustomizeTagsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withResourceType(resourceType: GetCustomizeTagsRequestResourceTypeEnum | string): GetCustomizeTagsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: GetCustomizeTagsRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): GetCustomizeTagsRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GetCustomizeTagsRequestResourceTypeEnum {
    CCE_CLUSTER = 'cce-cluster'
}
