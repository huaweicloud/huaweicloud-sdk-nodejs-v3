

export class ListCurrentUserRepositoriesRequest {
    public offset?: number;
    public limit?: number;
    private 'order_by'?: ListCurrentUserRepositoriesRequestOrderByEnum | string;
    public sort?: ListCurrentUserRepositoriesRequestSortEnum | string;
    public archived?: boolean;
    public search?: string;
    public starred?: boolean;
    public membership?: boolean;
    private 'user_created'?: boolean;
    private 'include_abnormal'?: boolean;
    public constructor() { 
    }
    public withOffset(offset: number): ListCurrentUserRepositoriesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListCurrentUserRepositoriesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOrderBy(orderBy: ListCurrentUserRepositoriesRequestOrderByEnum | string): ListCurrentUserRepositoriesRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: ListCurrentUserRepositoriesRequestOrderByEnum | string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): ListCurrentUserRepositoriesRequestOrderByEnum | string | undefined {
        return this['order_by'];
    }
    public withSort(sort: ListCurrentUserRepositoriesRequestSortEnum | string): ListCurrentUserRepositoriesRequest {
        this['sort'] = sort;
        return this;
    }
    public withArchived(archived: boolean): ListCurrentUserRepositoriesRequest {
        this['archived'] = archived;
        return this;
    }
    public withSearch(search: string): ListCurrentUserRepositoriesRequest {
        this['search'] = search;
        return this;
    }
    public withStarred(starred: boolean): ListCurrentUserRepositoriesRequest {
        this['starred'] = starred;
        return this;
    }
    public withMembership(membership: boolean): ListCurrentUserRepositoriesRequest {
        this['membership'] = membership;
        return this;
    }
    public withUserCreated(userCreated: boolean): ListCurrentUserRepositoriesRequest {
        this['user_created'] = userCreated;
        return this;
    }
    public set userCreated(userCreated: boolean  | undefined) {
        this['user_created'] = userCreated;
    }
    public get userCreated(): boolean | undefined {
        return this['user_created'];
    }
    public withIncludeAbnormal(includeAbnormal: boolean): ListCurrentUserRepositoriesRequest {
        this['include_abnormal'] = includeAbnormal;
        return this;
    }
    public set includeAbnormal(includeAbnormal: boolean  | undefined) {
        this['include_abnormal'] = includeAbnormal;
    }
    public get includeAbnormal(): boolean | undefined {
        return this['include_abnormal'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListCurrentUserRepositoriesRequestOrderByEnum {
    CREATED_AT = 'created_at',
    UPDATED_AT = 'updated_at'
}
/**
    * @export
    * @enum {string}
    */
export enum ListCurrentUserRepositoriesRequestSortEnum {
    ASC = 'asc',
    DESC = 'desc'
}
