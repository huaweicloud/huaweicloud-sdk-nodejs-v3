import { UnTagsReq } from './UnTagsReq';


export class UnTagResourceRequest {
    private 'resource_type'?: UnTagResourceRequestResourceTypeEnum | string;
    private 'resource_id'?: string;
    public body?: UnTagsReq;
    public constructor(resourceType?: string, resourceId?: string) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
    }
    public withResourceType(resourceType: UnTagResourceRequestResourceTypeEnum | string): UnTagResourceRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: UnTagResourceRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): UnTagResourceRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): UnTagResourceRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withBody(body: UnTagsReq): UnTagResourceRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UnTagResourceRequestResourceTypeEnum {
    CONFIGPOLICYASSIGNMENTS = 'config:policyAssignments',
    CONFIGAGGREGATORS = 'config:aggregators',
    CONFIGAGGREGATIONAUTHORIZATIONS = 'config:aggregationAuthorizations'
}
