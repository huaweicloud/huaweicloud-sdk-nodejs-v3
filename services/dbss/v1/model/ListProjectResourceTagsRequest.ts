

export class ListProjectResourceTagsRequest {
    private 'resource_type'?: ListProjectResourceTagsRequestResourceTypeEnum | string;
    public constructor(resourceType?: string) { 
        this['resource_type'] = resourceType;
    }
    public withResourceType(resourceType: ListProjectResourceTagsRequestResourceTypeEnum | string): ListProjectResourceTagsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ListProjectResourceTagsRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ListProjectResourceTagsRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListProjectResourceTagsRequestResourceTypeEnum {
    AUDITINSTANCE = 'auditInstance'
}
