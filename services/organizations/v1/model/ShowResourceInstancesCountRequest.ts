import { ResourceInstanceReqBody } from './ResourceInstanceReqBody';


export class ShowResourceInstancesCountRequest {
    private 'resource_type'?: ShowResourceInstancesCountRequestResourceTypeEnum | string;
    public body?: ResourceInstanceReqBody;
    public constructor(resourceType?: string) { 
        this['resource_type'] = resourceType;
    }
    public withResourceType(resourceType: ShowResourceInstancesCountRequestResourceTypeEnum | string): ShowResourceInstancesCountRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ShowResourceInstancesCountRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ShowResourceInstancesCountRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withBody(body: ResourceInstanceReqBody): ShowResourceInstancesCountRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowResourceInstancesCountRequestResourceTypeEnum {
    ORGANIZATIONSPOLICIES = 'organizations:policies',
    ORGANIZATIONSOUS = 'organizations:ous',
    ORGANIZATIONSACCOUNTS = 'organizations:accounts',
    ORGANIZATIONSROOTS = 'organizations:roots'
}
