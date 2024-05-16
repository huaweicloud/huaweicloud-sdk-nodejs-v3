

export class SearchSharedPrincipalsReqBody {
    public limit?: number;
    public marker?: string;
    public principals?: Array<string>;
    private 'resource_urn'?: string;
    private 'resource_owner'?: SearchSharedPrincipalsReqBodyResourceOwnerEnum | string;
    private 'resource_share_ids'?: Array<string>;
    public constructor(resourceOwner?: string) { 
        this['resource_owner'] = resourceOwner;
    }
    public withLimit(limit: number): SearchSharedPrincipalsReqBody {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): SearchSharedPrincipalsReqBody {
        this['marker'] = marker;
        return this;
    }
    public withPrincipals(principals: Array<string>): SearchSharedPrincipalsReqBody {
        this['principals'] = principals;
        return this;
    }
    public withResourceUrn(resourceUrn: string): SearchSharedPrincipalsReqBody {
        this['resource_urn'] = resourceUrn;
        return this;
    }
    public set resourceUrn(resourceUrn: string  | undefined) {
        this['resource_urn'] = resourceUrn;
    }
    public get resourceUrn(): string | undefined {
        return this['resource_urn'];
    }
    public withResourceOwner(resourceOwner: SearchSharedPrincipalsReqBodyResourceOwnerEnum | string): SearchSharedPrincipalsReqBody {
        this['resource_owner'] = resourceOwner;
        return this;
    }
    public set resourceOwner(resourceOwner: SearchSharedPrincipalsReqBodyResourceOwnerEnum | string  | undefined) {
        this['resource_owner'] = resourceOwner;
    }
    public get resourceOwner(): SearchSharedPrincipalsReqBodyResourceOwnerEnum | string | undefined {
        return this['resource_owner'];
    }
    public withResourceShareIds(resourceShareIds: Array<string>): SearchSharedPrincipalsReqBody {
        this['resource_share_ids'] = resourceShareIds;
        return this;
    }
    public set resourceShareIds(resourceShareIds: Array<string>  | undefined) {
        this['resource_share_ids'] = resourceShareIds;
    }
    public get resourceShareIds(): Array<string> | undefined {
        return this['resource_share_ids'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SearchSharedPrincipalsReqBodyResourceOwnerEnum {
    SELF = 'self',
    OTHER_ACCOUNTS = 'other-accounts'
}
