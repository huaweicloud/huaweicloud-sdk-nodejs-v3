import { ResourceInstancesReq } from './ResourceInstancesReq';


export class ListResourcesByTagRequest {
    private 'resource_type'?: ListResourcesByTagRequestResourceTypeEnum | string;
    public limit?: number;
    public offset?: number;
    public body?: ResourceInstancesReq;
    public constructor(resourceType?: string) { 
        this['resource_type'] = resourceType;
    }
    public withResourceType(resourceType: ListResourcesByTagRequestResourceTypeEnum | string): ListResourcesByTagRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ListResourcesByTagRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ListResourcesByTagRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withLimit(limit: number): ListResourcesByTagRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListResourcesByTagRequest {
        this['offset'] = offset;
        return this;
    }
    public withBody(body: ResourceInstancesReq): ListResourcesByTagRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListResourcesByTagRequestResourceTypeEnum {
    CONFIGPOLICYASSIGNMENTS = 'config:policyAssignments',
    CONFIGAGGREGATORS = 'config:aggregators',
    CONFIGAGGREGATIONAUTHORIZATIONS = 'config:aggregationAuthorizations'
}
