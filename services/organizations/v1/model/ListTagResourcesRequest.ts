

export class ListTagResourcesRequest {
    private 'X-Security-Token'?: string;
    private 'resource_type'?: ListTagResourcesRequestResourceTypeEnum | string;
    private 'resource_id'?: string;
    public limit?: number;
    public marker?: string;
    public constructor(resourceType?: string, resourceId?: string) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
    }
    public withXSecurityToken(xSecurityToken: string): ListTagResourcesRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withResourceType(resourceType: ListTagResourcesRequestResourceTypeEnum | string): ListTagResourcesRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ListTagResourcesRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ListTagResourcesRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): ListTagResourcesRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withLimit(limit: number): ListTagResourcesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListTagResourcesRequest {
        this['marker'] = marker;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListTagResourcesRequestResourceTypeEnum {
    ORGANIZATIONSPOLICIES = 'organizations:policies',
    ORGANIZATIONSOUS = 'organizations:ous',
    ORGANIZATIONSACCOUNTS = 'organizations:accounts',
    ORGANIZATIONSROOTS = 'organizations:roots'
}
