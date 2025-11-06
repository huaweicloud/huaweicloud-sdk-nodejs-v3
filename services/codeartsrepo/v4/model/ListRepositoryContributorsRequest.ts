

export class ListRepositoryContributorsRequest {
    private 'repository_id'?: number;
    public offset?: number;
    public limit?: number;
    private 'order_by'?: ListRepositoryContributorsRequestOrderByEnum | string;
    public sort?: ListRepositoryContributorsRequestSortEnum | string;
    private 'ref_name'?: string;
    private 'skip_merge'?: boolean;
    public author?: string;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): ListRepositoryContributorsRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withOffset(offset: number): ListRepositoryContributorsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListRepositoryContributorsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOrderBy(orderBy: ListRepositoryContributorsRequestOrderByEnum | string): ListRepositoryContributorsRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: ListRepositoryContributorsRequestOrderByEnum | string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): ListRepositoryContributorsRequestOrderByEnum | string | undefined {
        return this['order_by'];
    }
    public withSort(sort: ListRepositoryContributorsRequestSortEnum | string): ListRepositoryContributorsRequest {
        this['sort'] = sort;
        return this;
    }
    public withRefName(refName: string): ListRepositoryContributorsRequest {
        this['ref_name'] = refName;
        return this;
    }
    public set refName(refName: string  | undefined) {
        this['ref_name'] = refName;
    }
    public get refName(): string | undefined {
        return this['ref_name'];
    }
    public withSkipMerge(skipMerge: boolean): ListRepositoryContributorsRequest {
        this['skip_merge'] = skipMerge;
        return this;
    }
    public set skipMerge(skipMerge: boolean  | undefined) {
        this['skip_merge'] = skipMerge;
    }
    public get skipMerge(): boolean | undefined {
        return this['skip_merge'];
    }
    public withAuthor(author: string): ListRepositoryContributorsRequest {
        this['author'] = author;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListRepositoryContributorsRequestOrderByEnum {
    NAME = 'name',
    EMAIL = 'email',
    COMMITS = 'commits'
}
/**
    * @export
    * @enum {string}
    */
export enum ListRepositoryContributorsRequestSortEnum {
    ASC = 'asc',
    DESC = 'desc'
}
