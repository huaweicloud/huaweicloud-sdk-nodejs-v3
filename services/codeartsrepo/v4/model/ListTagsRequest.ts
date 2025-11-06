

export class ListTagsRequest {
    private 'repository_id'?: number;
    public creator?: string;
    public sort?: ListTagsRequestSortEnum | string;
    public search?: string;
    private 'order_by'?: ListTagsRequestOrderByEnum | string;
    public view?: ListTagsRequestViewEnum | string;
    public offset?: number;
    public limit?: number;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): ListTagsRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withCreator(creator: string): ListTagsRequest {
        this['creator'] = creator;
        return this;
    }
    public withSort(sort: ListTagsRequestSortEnum | string): ListTagsRequest {
        this['sort'] = sort;
        return this;
    }
    public withSearch(search: string): ListTagsRequest {
        this['search'] = search;
        return this;
    }
    public withOrderBy(orderBy: ListTagsRequestOrderByEnum | string): ListTagsRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: ListTagsRequestOrderByEnum | string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): ListTagsRequestOrderByEnum | string | undefined {
        return this['order_by'];
    }
    public withView(view: ListTagsRequestViewEnum | string): ListTagsRequest {
        this['view'] = view;
        return this;
    }
    public withOffset(offset: number): ListTagsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListTagsRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListTagsRequestSortEnum {
    ASC = 'asc',
    DESC = 'desc'
}
/**
    * @export
    * @enum {string}
    */
export enum ListTagsRequestOrderByEnum {
    NAME = 'name',
    UPDATED = 'updated',
    CREATED = 'created'
}
/**
    * @export
    * @enum {string}
    */
export enum ListTagsRequestViewEnum {
    SIMPLE = 'simple',
    BASIC = 'basic',
    DETAIL = 'detail'
}
