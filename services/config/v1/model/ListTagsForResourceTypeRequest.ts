

export class ListTagsForResourceTypeRequest {
    private 'resource_type'?: ListTagsForResourceTypeRequestResourceTypeEnum | string;
    public limit?: number;
    public offset?: number;
    public constructor(resourceType?: string) { 
        this['resource_type'] = resourceType;
    }
    public withResourceType(resourceType: ListTagsForResourceTypeRequestResourceTypeEnum | string): ListTagsForResourceTypeRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ListTagsForResourceTypeRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ListTagsForResourceTypeRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withLimit(limit: number): ListTagsForResourceTypeRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListTagsForResourceTypeRequest {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListTagsForResourceTypeRequestResourceTypeEnum {
    CONFIGPOLICYASSIGNMENTS = 'config:policyAssignments',
    CONFIGAGGREGATORS = 'config:aggregators',
    CONFIGAGGREGATIONAUTHORIZATIONS = 'config:aggregationAuthorizations'
}
