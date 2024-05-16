

export class SearchSharedResourcesReqBody {
    public limit?: number;
    public marker?: string;
    public principal?: string;
    private 'resource_ids'?: Array<string>;
    private 'resource_urns'?: Array<string>;
    private 'resource_owner'?: SearchSharedResourcesReqBodyResourceOwnerEnum | string;
    private 'resource_share_ids'?: Array<string>;
    private 'resource_region'?: string;
    private 'resource_type'?: string;
    public constructor(resourceOwner?: string) { 
        this['resource_owner'] = resourceOwner;
    }
    public withLimit(limit: number): SearchSharedResourcesReqBody {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): SearchSharedResourcesReqBody {
        this['marker'] = marker;
        return this;
    }
    public withPrincipal(principal: string): SearchSharedResourcesReqBody {
        this['principal'] = principal;
        return this;
    }
    public withResourceIds(resourceIds: Array<string>): SearchSharedResourcesReqBody {
        this['resource_ids'] = resourceIds;
        return this;
    }
    public set resourceIds(resourceIds: Array<string>  | undefined) {
        this['resource_ids'] = resourceIds;
    }
    public get resourceIds(): Array<string> | undefined {
        return this['resource_ids'];
    }
    public withResourceUrns(resourceUrns: Array<string>): SearchSharedResourcesReqBody {
        this['resource_urns'] = resourceUrns;
        return this;
    }
    public set resourceUrns(resourceUrns: Array<string>  | undefined) {
        this['resource_urns'] = resourceUrns;
    }
    public get resourceUrns(): Array<string> | undefined {
        return this['resource_urns'];
    }
    public withResourceOwner(resourceOwner: SearchSharedResourcesReqBodyResourceOwnerEnum | string): SearchSharedResourcesReqBody {
        this['resource_owner'] = resourceOwner;
        return this;
    }
    public set resourceOwner(resourceOwner: SearchSharedResourcesReqBodyResourceOwnerEnum | string  | undefined) {
        this['resource_owner'] = resourceOwner;
    }
    public get resourceOwner(): SearchSharedResourcesReqBodyResourceOwnerEnum | string | undefined {
        return this['resource_owner'];
    }
    public withResourceShareIds(resourceShareIds: Array<string>): SearchSharedResourcesReqBody {
        this['resource_share_ids'] = resourceShareIds;
        return this;
    }
    public set resourceShareIds(resourceShareIds: Array<string>  | undefined) {
        this['resource_share_ids'] = resourceShareIds;
    }
    public get resourceShareIds(): Array<string> | undefined {
        return this['resource_share_ids'];
    }
    public withResourceRegion(resourceRegion: string): SearchSharedResourcesReqBody {
        this['resource_region'] = resourceRegion;
        return this;
    }
    public set resourceRegion(resourceRegion: string  | undefined) {
        this['resource_region'] = resourceRegion;
    }
    public get resourceRegion(): string | undefined {
        return this['resource_region'];
    }
    public withResourceType(resourceType: string): SearchSharedResourcesReqBody {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SearchSharedResourcesReqBodyResourceOwnerEnum {
    SELF = 'self',
    OTHER_ACCOUNTS = 'other-accounts'
}
