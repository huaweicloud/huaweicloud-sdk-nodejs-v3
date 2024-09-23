

export class ListResourceTagsRequest {
    private 'X-Security-Token'?: string;
    private 'resource_type'?: ListResourceTagsRequestResourceTypeEnum | string;
    public constructor(resourceType?: string) { 
        this['resource_type'] = resourceType;
    }
    public withXSecurityToken(xSecurityToken: string): ListResourceTagsRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withResourceType(resourceType: ListResourceTagsRequestResourceTypeEnum | string): ListResourceTagsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ListResourceTagsRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ListResourceTagsRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListResourceTagsRequestResourceTypeEnum {
    ORGANIZATIONSPOLICIES = 'organizations:policies',
    ORGANIZATIONSOUS = 'organizations:ous',
    ORGANIZATIONSACCOUNTS = 'organizations:accounts',
    ORGANIZATIONSROOTS = 'organizations:roots'
}
