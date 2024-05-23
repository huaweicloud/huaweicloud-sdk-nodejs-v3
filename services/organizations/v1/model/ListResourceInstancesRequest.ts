import { ResourceInstanceReqBody } from './ResourceInstanceReqBody';


export class ListResourceInstancesRequest {
    public limit?: number;
    public offset?: string;
    private 'resource_type'?: ListResourceInstancesRequestResourceTypeEnum | string;
    public body?: ResourceInstanceReqBody;
    public constructor(resourceType?: string) { 
        this['resource_type'] = resourceType;
    }
    public withLimit(limit: number): ListResourceInstancesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListResourceInstancesRequest {
        this['offset'] = offset;
        return this;
    }
    public withResourceType(resourceType: ListResourceInstancesRequestResourceTypeEnum | string): ListResourceInstancesRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ListResourceInstancesRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ListResourceInstancesRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withBody(body: ResourceInstanceReqBody): ListResourceInstancesRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListResourceInstancesRequestResourceTypeEnum {
    ORGANIZATIONSPOLICIES = 'organizations:policies',
    ORGANIZATIONSOUS = 'organizations:ous',
    ORGANIZATIONSACCOUNTS = 'organizations:accounts',
    ORGANIZATIONSROOTS = 'organizations:roots'
}
