

export class SearchDistinctSharedResourcesReqBody {
    public limit?: number;
    public marker?: string;
    private 'resource_ids'?: Array<string>;
    public principal?: string;
    private 'resource_region'?: string;
    private 'resource_urns'?: Array<string>;
    private 'resource_owner'?: SearchDistinctSharedResourcesReqBodyResourceOwnerEnum | string;
    public constructor(resourceOwner?: string) { 
        this['resource_owner'] = resourceOwner;
    }
    public withLimit(limit: number): SearchDistinctSharedResourcesReqBody {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): SearchDistinctSharedResourcesReqBody {
        this['marker'] = marker;
        return this;
    }
    public withResourceIds(resourceIds: Array<string>): SearchDistinctSharedResourcesReqBody {
        this['resource_ids'] = resourceIds;
        return this;
    }
    public set resourceIds(resourceIds: Array<string>  | undefined) {
        this['resource_ids'] = resourceIds;
    }
    public get resourceIds(): Array<string> | undefined {
        return this['resource_ids'];
    }
    public withPrincipal(principal: string): SearchDistinctSharedResourcesReqBody {
        this['principal'] = principal;
        return this;
    }
    public withResourceRegion(resourceRegion: string): SearchDistinctSharedResourcesReqBody {
        this['resource_region'] = resourceRegion;
        return this;
    }
    public set resourceRegion(resourceRegion: string  | undefined) {
        this['resource_region'] = resourceRegion;
    }
    public get resourceRegion(): string | undefined {
        return this['resource_region'];
    }
    public withResourceUrns(resourceUrns: Array<string>): SearchDistinctSharedResourcesReqBody {
        this['resource_urns'] = resourceUrns;
        return this;
    }
    public set resourceUrns(resourceUrns: Array<string>  | undefined) {
        this['resource_urns'] = resourceUrns;
    }
    public get resourceUrns(): Array<string> | undefined {
        return this['resource_urns'];
    }
    public withResourceOwner(resourceOwner: SearchDistinctSharedResourcesReqBodyResourceOwnerEnum | string): SearchDistinctSharedResourcesReqBody {
        this['resource_owner'] = resourceOwner;
        return this;
    }
    public set resourceOwner(resourceOwner: SearchDistinctSharedResourcesReqBodyResourceOwnerEnum | string  | undefined) {
        this['resource_owner'] = resourceOwner;
    }
    public get resourceOwner(): SearchDistinctSharedResourcesReqBodyResourceOwnerEnum | string | undefined {
        return this['resource_owner'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SearchDistinctSharedResourcesReqBodyResourceOwnerEnum {
    SELF = 'self',
    OTHER_ACCOUNTS = 'other-accounts'
}
