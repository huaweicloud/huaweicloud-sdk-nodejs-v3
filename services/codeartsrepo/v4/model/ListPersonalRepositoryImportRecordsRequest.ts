

export class ListPersonalRepositoryImportRecordsRequest {
    public offset?: number;
    public limit?: number;
    public state?: ListPersonalRepositoryImportRecordsRequestStateEnum | string;
    private 'source_type'?: ListPersonalRepositoryImportRecordsRequestSourceTypeEnum | string;
    private 'created_after'?: Date;
    private 'created_before'?: Date;
    private 'finished_after'?: Date;
    private 'finished_before'?: Date;
    public search?: string;
    private 'order_by'?: ListPersonalRepositoryImportRecordsRequestOrderByEnum | string;
    public sort?: ListPersonalRepositoryImportRecordsRequestSortEnum | string;
    public constructor() { 
    }
    public withOffset(offset: number): ListPersonalRepositoryImportRecordsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPersonalRepositoryImportRecordsRequest {
        this['limit'] = limit;
        return this;
    }
    public withState(state: ListPersonalRepositoryImportRecordsRequestStateEnum | string): ListPersonalRepositoryImportRecordsRequest {
        this['state'] = state;
        return this;
    }
    public withSourceType(sourceType: ListPersonalRepositoryImportRecordsRequestSourceTypeEnum | string): ListPersonalRepositoryImportRecordsRequest {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: ListPersonalRepositoryImportRecordsRequestSourceTypeEnum | string  | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType(): ListPersonalRepositoryImportRecordsRequestSourceTypeEnum | string | undefined {
        return this['source_type'];
    }
    public withCreatedAfter(createdAfter: Date): ListPersonalRepositoryImportRecordsRequest {
        this['created_after'] = createdAfter;
        return this;
    }
    public set createdAfter(createdAfter: Date  | undefined) {
        this['created_after'] = createdAfter;
    }
    public get createdAfter(): Date | undefined {
        return this['created_after'];
    }
    public withCreatedBefore(createdBefore: Date): ListPersonalRepositoryImportRecordsRequest {
        this['created_before'] = createdBefore;
        return this;
    }
    public set createdBefore(createdBefore: Date  | undefined) {
        this['created_before'] = createdBefore;
    }
    public get createdBefore(): Date | undefined {
        return this['created_before'];
    }
    public withFinishedAfter(finishedAfter: Date): ListPersonalRepositoryImportRecordsRequest {
        this['finished_after'] = finishedAfter;
        return this;
    }
    public set finishedAfter(finishedAfter: Date  | undefined) {
        this['finished_after'] = finishedAfter;
    }
    public get finishedAfter(): Date | undefined {
        return this['finished_after'];
    }
    public withFinishedBefore(finishedBefore: Date): ListPersonalRepositoryImportRecordsRequest {
        this['finished_before'] = finishedBefore;
        return this;
    }
    public set finishedBefore(finishedBefore: Date  | undefined) {
        this['finished_before'] = finishedBefore;
    }
    public get finishedBefore(): Date | undefined {
        return this['finished_before'];
    }
    public withSearch(search: string): ListPersonalRepositoryImportRecordsRequest {
        this['search'] = search;
        return this;
    }
    public withOrderBy(orderBy: ListPersonalRepositoryImportRecordsRequestOrderByEnum | string): ListPersonalRepositoryImportRecordsRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: ListPersonalRepositoryImportRecordsRequestOrderByEnum | string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): ListPersonalRepositoryImportRecordsRequestOrderByEnum | string | undefined {
        return this['order_by'];
    }
    public withSort(sort: ListPersonalRepositoryImportRecordsRequestSortEnum | string): ListPersonalRepositoryImportRecordsRequest {
        this['sort'] = sort;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListPersonalRepositoryImportRecordsRequestStateEnum {
    FINISHED = 'finished',
    FAIL = 'fail',
    IMPORTING = 'importing'
}
/**
    * @export
    * @enum {string}
    */
export enum ListPersonalRepositoryImportRecordsRequestSourceTypeEnum {
    GITEE = 'gitee',
    SELF_MANAGED_GITLAB = 'self_managed_gitlab',
    GITLAB = 'gitlab',
    GITHUB = 'github',
    GIT = 'git',
    SVN = 'svn',
    CODING = 'coding',
    BITBUCKET = 'bitbucket',
    GERRIT = 'gerrit',
    CODEUP = 'codeup'
}
/**
    * @export
    * @enum {string}
    */
export enum ListPersonalRepositoryImportRecordsRequestOrderByEnum {
    CREATED_AT = 'created_at',
    SOURCE_REPO_NAME = 'source_repo_name',
    SIZE = 'size'
}
/**
    * @export
    * @enum {string}
    */
export enum ListPersonalRepositoryImportRecordsRequestSortEnum {
    ASC = 'asc',
    DESC = 'desc'
}
