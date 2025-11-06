

export class ListBranchesRequest {
    private 'repository_id'?: number;
    private 'branch_type'?: ListBranchesRequestBranchTypeEnum | string;
    public creator?: string;
    public sort?: ListBranchesRequestSortEnum | string;
    private 'query_view'?: ListBranchesRequestQueryViewEnum | string;
    public view?: ListBranchesRequestViewEnum | string;
    public offset?: number;
    public limit?: number;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): ListBranchesRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withBranchType(branchType: ListBranchesRequestBranchTypeEnum | string): ListBranchesRequest {
        this['branch_type'] = branchType;
        return this;
    }
    public set branchType(branchType: ListBranchesRequestBranchTypeEnum | string  | undefined) {
        this['branch_type'] = branchType;
    }
    public get branchType(): ListBranchesRequestBranchTypeEnum | string | undefined {
        return this['branch_type'];
    }
    public withCreator(creator: string): ListBranchesRequest {
        this['creator'] = creator;
        return this;
    }
    public withSort(sort: ListBranchesRequestSortEnum | string): ListBranchesRequest {
        this['sort'] = sort;
        return this;
    }
    public withQueryView(queryView: ListBranchesRequestQueryViewEnum | string): ListBranchesRequest {
        this['query_view'] = queryView;
        return this;
    }
    public set queryView(queryView: ListBranchesRequestQueryViewEnum | string  | undefined) {
        this['query_view'] = queryView;
    }
    public get queryView(): ListBranchesRequestQueryViewEnum | string | undefined {
        return this['query_view'];
    }
    public withView(view: ListBranchesRequestViewEnum | string): ListBranchesRequest {
        this['view'] = view;
        return this;
    }
    public withOffset(offset: number): ListBranchesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListBranchesRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListBranchesRequestBranchTypeEnum {
    NOT_PROTECT = 'not_protect'
}
/**
    * @export
    * @enum {string}
    */
export enum ListBranchesRequestSortEnum {
    NAME = 'name',
    UPDATED_DESC = 'updated_desc',
    UPDATED_ASC = 'updated_asc'
}
/**
    * @export
    * @enum {string}
    */
export enum ListBranchesRequestQueryViewEnum {
    MY_BRANCHES = 'my_branches',
    ACTIVE = 'active',
    STALE = 'stale',
    ALL_BRANCHES = 'all_branches'
}
/**
    * @export
    * @enum {string}
    */
export enum ListBranchesRequestViewEnum {
    SIMPLE = 'simple',
    BASIC = 'basic',
    ALL = 'all'
}
