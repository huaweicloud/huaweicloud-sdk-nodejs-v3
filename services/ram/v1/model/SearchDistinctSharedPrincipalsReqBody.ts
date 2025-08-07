

export class SearchDistinctSharedPrincipalsReqBody {
    public limit?: number;
    public marker?: string;
    public principals?: Array<string>;
    private 'resource_urn'?: string;
    private 'resource_owner'?: SearchDistinctSharedPrincipalsReqBodyResourceOwnerEnum | string;
    public constructor(resourceOwner?: string) { 
        this['resource_owner'] = resourceOwner;
    }
    public withLimit(limit: number): SearchDistinctSharedPrincipalsReqBody {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): SearchDistinctSharedPrincipalsReqBody {
        this['marker'] = marker;
        return this;
    }
    public withPrincipals(principals: Array<string>): SearchDistinctSharedPrincipalsReqBody {
        this['principals'] = principals;
        return this;
    }
    public withResourceUrn(resourceUrn: string): SearchDistinctSharedPrincipalsReqBody {
        this['resource_urn'] = resourceUrn;
        return this;
    }
    public set resourceUrn(resourceUrn: string  | undefined) {
        this['resource_urn'] = resourceUrn;
    }
    public get resourceUrn(): string | undefined {
        return this['resource_urn'];
    }
    public withResourceOwner(resourceOwner: SearchDistinctSharedPrincipalsReqBodyResourceOwnerEnum | string): SearchDistinctSharedPrincipalsReqBody {
        this['resource_owner'] = resourceOwner;
        return this;
    }
    public set resourceOwner(resourceOwner: SearchDistinctSharedPrincipalsReqBodyResourceOwnerEnum | string  | undefined) {
        this['resource_owner'] = resourceOwner;
    }
    public get resourceOwner(): SearchDistinctSharedPrincipalsReqBodyResourceOwnerEnum | string | undefined {
        return this['resource_owner'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SearchDistinctSharedPrincipalsReqBodyResourceOwnerEnum {
    SELF = 'self',
    OTHER_ACCOUNTS = 'other-accounts'
}
