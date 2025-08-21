

export class ListImpersonationTokensRequest {
    private 'group_id'?: number;
    public state?: ListImpersonationTokensRequestStateEnum | string;
    public search?: string;
    public offset?: number;
    public limit?: number;
    public constructor(groupId?: number) { 
        this['group_id'] = groupId;
    }
    public withGroupId(groupId: number): ListImpersonationTokensRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: number  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): number | undefined {
        return this['group_id'];
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
