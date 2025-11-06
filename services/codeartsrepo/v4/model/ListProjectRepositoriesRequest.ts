

export class ListProjectRepositoriesRequest {
    private 'project_id'?: string;
    public search?: string;
    public offset?: number;
    public limit?: number;
    private 'order_by'?: ListProjectRepositoriesRequestOrderByEnum | string;
    public sort?: ListProjectRepositoriesRequestSortEnum | string;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ListProjectRepositoriesRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withSearch(search: string): ListProjectRepositoriesRequest {
        this['search'] = search;
        return this;
    }
    public withOffset(offset: number): ListProjectRepositoriesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListProjectRepositoriesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOrderBy(orderBy: ListProjectRepositoriesRequestOrderByEnum | string): ListProjectRepositoriesRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: ListProjectRepositoriesRequestOrderByEnum | string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): ListProjectRepositoriesRequestOrderByEnum | string | undefined {
        return this['order_by'];
    }
    public withSort(sort: ListProjectRepositoriesRequestSortEnum | string): ListProjectRepositoriesRequest {
        this['sort'] = sort;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListProjectRepositoriesRequestOrderByEnum {
    ID = 'id',
    NAME = 'name',
    CREATED_AT = 'created_at',
    UPDATED_AT = 'updated_at'
}
/**
    * @export
    * @enum {string}
    */
export enum ListProjectRepositoriesRequestSortEnum {
    ASC = 'asc',
    DESC = 'desc'
}
