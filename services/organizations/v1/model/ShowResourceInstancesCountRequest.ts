import { ResourceInstanceReqBody } from './ResourceInstanceReqBody';


export class ShowResourceInstancesCountRequest {
    private 'X-Security-Token'?: string;
    private 'resource_type'?: ShowResourceInstancesCountRequestResourceTypeEnum | string;
    public body?: ResourceInstanceReqBody;
    public constructor(resourceType?: string) { 
        this['resource_type'] = resourceType;
    }
    public withXSecurityToken(xSecurityToken: string): ShowResourceInstancesCountRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
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
