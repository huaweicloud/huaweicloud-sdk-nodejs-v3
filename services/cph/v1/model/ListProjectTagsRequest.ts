

export class ListProjectTagsRequest {
    private 'resource_type'?: ListProjectTagsRequestResourceTypeEnum | string;
    public limit?: number;
    public offset?: number;
    public constructor(resourceType?: string) { 
        this['resource_type'] = resourceType;
    }
    public withResourceType(resourceType: ListProjectTagsRequestResourceTypeEnum | string): ListProjectTagsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ListProjectTagsRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ListProjectTagsRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withLimit(limit: number): ListProjectTagsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListProjectTagsRequest {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListProjectTagsRequestResourceTypeEnum {
    CPH_SERVER = 'cph-server'
}
