

export class ListProjectSubgroupsAndRepositoriesRequest {
    private 'project_id'?: string;
    public filter?: number;
    private 'order_by'?: ListProjectSubgroupsAndRepositoriesRequestOrderByEnum | string;
    public sort?: ListProjectSubgroupsAndRepositoriesRequestSortEnum | string;
    public archived?: boolean;
    public offset?: number;
    public limit?: number;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ListProjectSubgroupsAndRepositoriesRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withFilter(filter: number): ListProjectSubgroupsAndRepositoriesRequest {
        this['filter'] = filter;
        return this;
    }
    public withOrderBy(orderBy: ListProjectSubgroupsAndRepositoriesRequestOrderByEnum | string): ListProjectSubgroupsAndRepositoriesRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: ListProjectSubgroupsAndRepositoriesRequestOrderByEnum | string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): ListProjectSubgroupsAndRepositoriesRequestOrderByEnum | string | undefined {
        return this['order_by'];
    }
    public withSort(sort: ListProjectSubgroupsAndRepositoriesRequestSortEnum | string): ListProjectSubgroupsAndRepositoriesRequest {
        this['sort'] = sort;
        return this;
    }
    public withArchived(archived: boolean): ListProjectSubgroupsAndRepositoriesRequest {
        this['archived'] = archived;
        return this;
    }
    public withOffset(offset: number): ListProjectSubgroupsAndRepositoriesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListProjectSubgroupsAndRepositoriesRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListProjectSubgroupsAndRepositoriesRequestOrderByEnum {
    ID = 'id',
    NAME = 'name',
    CREATED_AT = 'created_at',
    UPDATED_AT = 'updated_at'
}
/**
    * @export
    * @enum {string}
    */
export enum ListProjectSubgroupsAndRepositoriesRequestSortEnum {
    ASC = 'asc',
    DESC = 'desc'
}
