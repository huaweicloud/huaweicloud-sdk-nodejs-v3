

export class ListProjectTagsRequest {
    private 'resource_type'?: ListProjectTagsRequestResourceTypeEnum | string;
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
}

/**
    * @export
    * @enum {string}
    */
export enum ListProjectTagsRequestResourceTypeEnum {
    DC_DIRECTCONNECT = 'dc-directconnect',
    DC_VGW = 'dc-vgw',
    DC_VIF = 'dc-vif'
}
