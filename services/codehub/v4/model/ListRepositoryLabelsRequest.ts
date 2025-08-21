

export class ListRepositoryLabelsRequest {
    private 'repository_id'?: number;
    public offset?: number;
    public limit?: number;
    public search?: string;
    public sort?: ListRepositoryLabelsRequestSortEnum | string;
    private 'include_expired'?: boolean;
    public view?: ListRepositoryLabelsRequestViewEnum | string;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): ListRepositoryLabelsRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withOffset(offset: number): ListRepositoryLabelsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListRepositoryLabelsRequest {
        this['limit'] = limit;
        return this;
    }
    public withSearch(search: string): ListRepositoryLabelsRequest {
        this['search'] = search;
        return this;
    }
    public withSort(sort: ListRepositoryLabelsRequestSortEnum | string): ListRepositoryLabelsRequest {
        this['sort'] = sort;
        return this;
    }
    public withIncludeExpired(includeExpired: boolean): ListRepositoryLabelsRequest {
        this['include_expired'] = includeExpired;
        return this;
    }
    public set includeExpired(includeExpired: boolean  | undefined) {
        this['include_expired'] = includeExpired;
    }
    public get includeExpired(): boolean | undefined {
        return this['include_expired'];
    }
    public withView(view: ListRepositoryLabelsRequestViewEnum | string): ListRepositoryLabelsRequest {
        this['view'] = view;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListRepositoryLabelsRequestSortEnum {
    NAME_ASC = 'name_asc',
    NAME_DESC = 'name_desc',
    CREATED_ASC = 'created_asc',
    CREATED_DESC = 'created_desc',
    UPDATED_ASC = 'updated_asc',
    UPDATED_DESC = 'updated_desc'
}
/**
    * @export
    * @enum {string}
    */
export enum ListRepositoryLabelsRequestViewEnum {
    SIMPLE = 'simple',
    BASIC = 'basic',
    DETAIL = 'detail'
}
