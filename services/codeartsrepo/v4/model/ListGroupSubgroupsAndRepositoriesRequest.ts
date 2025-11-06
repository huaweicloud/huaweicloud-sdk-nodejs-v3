

export class ListGroupSubgroupsAndRepositoriesRequest {
    private 'group_id'?: number;
    public filter?: number;
    private 'order_by'?: ListGroupSubgroupsAndRepositoriesRequestOrderByEnum | string;
    public sort?: ListGroupSubgroupsAndRepositoriesRequestSortEnum | string;
    public archived?: boolean;
    public offset?: number;
    public limit?: number;
    public constructor(groupId?: number) { 
        this['group_id'] = groupId;
    }
    public withGroupId(groupId: number): ListGroupSubgroupsAndRepositoriesRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: number  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): number | undefined {
        return this['group_id'];
    }
    public withFilter(filter: number): ListGroupSubgroupsAndRepositoriesRequest {
        this['filter'] = filter;
        return this;
    }
    public withOrderBy(orderBy: ListGroupSubgroupsAndRepositoriesRequestOrderByEnum | string): ListGroupSubgroupsAndRepositoriesRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: ListGroupSubgroupsAndRepositoriesRequestOrderByEnum | string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): ListGroupSubgroupsAndRepositoriesRequestOrderByEnum | string | undefined {
        return this['order_by'];
    }
    public withSort(sort: ListGroupSubgroupsAndRepositoriesRequestSortEnum | string): ListGroupSubgroupsAndRepositoriesRequest {
        this['sort'] = sort;
        return this;
    }
    public withArchived(archived: boolean): ListGroupSubgroupsAndRepositoriesRequest {
        this['archived'] = archived;
        return this;
    }
    public withOffset(offset: number): ListGroupSubgroupsAndRepositoriesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListGroupSubgroupsAndRepositoriesRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListGroupSubgroupsAndRepositoriesRequestOrderByEnum {
    ID = 'id',
    NAME = 'name',
    CREATED_AT = 'created_at',
    UPDATED_AT = 'updated_at'
}
/**
    * @export
    * @enum {string}
    */
export enum ListGroupSubgroupsAndRepositoriesRequestSortEnum {
    ASC = 'asc',
    DESC = 'desc'
}
