

export class ListGroupsRequest {
    public search?: string;
    private 'all_available'?: boolean;
    private 'order_by'?: ListGroupsRequestOrderByEnum | string;
    public sort?: ListGroupsRequestSortEnum | string;
    public starred?: boolean;
    public offset?: number;
    public limit?: number;
    public owned?: boolean;
    public constructor() { 
    }
    public withSearch(search: string): ListGroupsRequest {
        this['search'] = search;
        return this;
    }
    public withAllAvailable(allAvailable: boolean): ListGroupsRequest {
        this['all_available'] = allAvailable;
        return this;
    }
    public set allAvailable(allAvailable: boolean  | undefined) {
        this['all_available'] = allAvailable;
    }
    public get allAvailable(): boolean | undefined {
        return this['all_available'];
    }
    public withOrderBy(orderBy: ListGroupsRequestOrderByEnum | string): ListGroupsRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: ListGroupsRequestOrderByEnum | string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): ListGroupsRequestOrderByEnum | string | undefined {
        return this['order_by'];
    }
    public withSort(sort: ListGroupsRequestSortEnum | string): ListGroupsRequest {
        this['sort'] = sort;
        return this;
    }
    public withStarred(starred: boolean): ListGroupsRequest {
        this['starred'] = starred;
        return this;
    }
    public withOffset(offset: number): ListGroupsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListGroupsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOwned(owned: boolean): ListGroupsRequest {
        this['owned'] = owned;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListGroupsRequestOrderByEnum {
    NAME = 'name',
    PATH = 'path',
    ID = 'id',
    CREATED_AT = 'created_at',
    UPDATED_AT = 'updated_at'
}
/**
    * @export
    * @enum {string}
    */
export enum ListGroupsRequestSortEnum {
    ASC = 'asc',
    DESC = 'desc'
}
