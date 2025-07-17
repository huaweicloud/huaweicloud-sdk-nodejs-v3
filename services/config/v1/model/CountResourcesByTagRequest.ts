import { ResourceInstancesReq } from './ResourceInstancesReq';


export class CountResourcesByTagRequest {
    private 'resource_type'?: CountResourcesByTagRequestResourceTypeEnum | string;
    public body?: ResourceInstancesReq;
    public constructor(resourceType?: string) { 
        this['resource_type'] = resourceType;
    }
    public withResourceType(resourceType: CountResourcesByTagRequestResourceTypeEnum | string): CountResourcesByTagRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: CountResourcesByTagRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): CountResourcesByTagRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withBody(body: ResourceInstancesReq): CountResourcesByTagRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CountResourcesByTagRequestResourceTypeEnum {
    CONFIGPOLICYASSIGNMENTS = 'config:policyAssignments',
    CONFIGAGGREGATORS = 'config:aggregators',
    CONFIGAGGREGATIONAUTHORIZATIONS = 'config:aggregationAuthorizations'
}
