

export class ListGroupRepositoriesRequest {
    private 'group_id'?: number;
    public search?: string;
    public offset?: number;
    public limit?: number;
    private 'order_by'?: ListGroupRepositoriesRequestOrderByEnum | string;
    public sort?: ListGroupRepositoriesRequestSortEnum | string;
    public constructor(groupId?: number) { 
        this['group_id'] = groupId;
    }
    public withGroupId(groupId: number): ListGroupRepositoriesRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: number  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): number | undefined {
        return this['group_id'];
    }
    public withSearch(search: string): ListGroupRepositoriesRequest {
        this['search'] = search;
        return this;
    }
    public withOffset(offset: number): ListGroupRepositoriesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListGroupRepositoriesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOrderBy(orderBy: ListGroupRepositoriesRequestOrderByEnum | string): ListGroupRepositoriesRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: ListGroupRepositoriesRequestOrderByEnum | string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): ListGroupRepositoriesRequestOrderByEnum | string | undefined {
        return this['order_by'];
    }
    public withSort(sort: ListGroupRepositoriesRequestSortEnum | string): ListGroupRepositoriesRequest {
        this['sort'] = sort;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListGroupRepositoriesRequestOrderByEnum {
    ID = 'id',
    NAME = 'name',
    CREATED_AT = 'created_at',
    UPDATED_AT = 'updated_at'
}
/**
    * @export
    * @enum {string}
    */
export enum ListGroupRepositoriesRequestSortEnum {
    ASC = 'asc',
    DESC = 'desc'
}
