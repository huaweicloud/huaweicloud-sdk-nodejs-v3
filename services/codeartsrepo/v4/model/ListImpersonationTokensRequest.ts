

export class ListImpersonationTokensRequest {
    public state?: ListImpersonationTokensRequestStateEnum | string;
    public search?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withState(state: ListImpersonationTokensRequestStateEnum | string): ListImpersonationTokensRequest {
        this['state'] = state;
        return this;
    }
    public withSearch(search: string): ListImpersonationTokensRequest {
        this['search'] = search;
        return this;
    }
    public withOffset(offset: number): ListImpersonationTokensRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListImpersonationTokensRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListImpersonationTokensRequestStateEnum {
    ALL = 'all',
    ACTIVE = 'active',
    INACTIVE = 'inactive'
}
