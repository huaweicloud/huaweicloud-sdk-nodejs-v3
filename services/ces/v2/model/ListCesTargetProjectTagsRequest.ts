

export class ListCesTargetProjectTagsRequest {
    private 'resource_type'?: ListCesTargetProjectTagsRequestResourceTypeEnum | string;
    public constructor(resourceType?: string) { 
        this['resource_type'] = resourceType;
    }
    public withResourceType(resourceType: ListCesTargetProjectTagsRequestResourceTypeEnum | string): ListCesTargetProjectTagsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ListCesTargetProjectTagsRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ListCesTargetProjectTagsRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListCesTargetProjectTagsRequestResourceTypeEnum {
    CES_ALARM = 'CES-alarm'
}
