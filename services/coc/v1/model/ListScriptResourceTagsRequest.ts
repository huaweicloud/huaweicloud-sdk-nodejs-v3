

export class ListScriptResourceTagsRequest {
    private 'resource_type'?: ListScriptResourceTagsRequestResourceTypeEnum | string;
    public limit?: string;
    public offset?: string;
    public constructor(resourceType?: string) { 
        this['resource_type'] = resourceType;
    }
    public withResourceType(resourceType: ListScriptResourceTagsRequestResourceTypeEnum | string): ListScriptResourceTagsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ListScriptResourceTagsRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ListScriptResourceTagsRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withLimit(limit: string): ListScriptResourceTagsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListScriptResourceTagsRequest {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListScriptResourceTagsRequestResourceTypeEnum {
    COCSCRIPT = 'coc:script'
}
