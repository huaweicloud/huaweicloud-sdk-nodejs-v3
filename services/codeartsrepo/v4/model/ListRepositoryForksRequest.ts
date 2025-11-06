

export class ListRepositoryForksRequest {
    private 'repository_id'?: number;
    public offset?: number;
    public limit?: number;
    private 'order_by'?: ListRepositoryForksRequestOrderByEnum | string;
    public sort?: ListRepositoryForksRequestSortEnum | string;
    public view?: ListRepositoryForksRequestViewEnum | string;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): ListRepositoryForksRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withOffset(offset: number): ListRepositoryForksRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListRepositoryForksRequest {
        this['limit'] = limit;
        return this;
    }
    public withOrderBy(orderBy: ListRepositoryForksRequestOrderByEnum | string): ListRepositoryForksRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: ListRepositoryForksRequestOrderByEnum | string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): ListRepositoryForksRequestOrderByEnum | string | undefined {
        return this['order_by'];
    }
    public withSort(sort: ListRepositoryForksRequestSortEnum | string): ListRepositoryForksRequest {
        this['sort'] = sort;
        return this;
    }
    public withView(view: ListRepositoryForksRequestViewEnum | string): ListRepositoryForksRequest {
        this['view'] = view;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListRepositoryForksRequestOrderByEnum {
    CREATED_AT = 'created_at',
    UPDATED_AT = 'updated_at'
}
/**
    * @export
    * @enum {string}
    */
export enum ListRepositoryForksRequestSortEnum {
    ASC = 'asc',
    DESC = 'desc'
}
/**
    * @export
    * @enum {string}
    */
export enum ListRepositoryForksRequestViewEnum {
    BASIC = 'basic',
    LEAST = 'least'
}
