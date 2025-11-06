

export class ListMergeRequestDiscussionsRequest {
    private 'repository_id'?: number;
    private 'merge_request_iid'?: number;
    public unresolved?: string;
    private 'author_id'?: number;
    public sort?: string;
    public offset?: number;
    public limit?: number;
    public constructor(repositoryId?: number, mergeRequestIid?: number) { 
        this['repository_id'] = repositoryId;
        this['merge_request_iid'] = mergeRequestIid;
    }
    public withRepositoryId(repositoryId: number): ListMergeRequestDiscussionsRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withMergeRequestIid(mergeRequestIid: number): ListMergeRequestDiscussionsRequest {
        this['merge_request_iid'] = mergeRequestIid;
        return this;
    }
    public set mergeRequestIid(mergeRequestIid: number  | undefined) {
        this['merge_request_iid'] = mergeRequestIid;
    }
    public get mergeRequestIid(): number | undefined {
        return this['merge_request_iid'];
    }
    public withUnresolved(unresolved: string): ListMergeRequestDiscussionsRequest {
        this['unresolved'] = unresolved;
        return this;
    }
    public withAuthorId(authorId: number): ListMergeRequestDiscussionsRequest {
        this['author_id'] = authorId;
        return this;
    }
    public set authorId(authorId: number  | undefined) {
        this['author_id'] = authorId;
    }
    public get authorId(): number | undefined {
        return this['author_id'];
    }
    public withSort(sort: string): ListMergeRequestDiscussionsRequest {
        this['sort'] = sort;
        return this;
    }
    public withOffset(offset: number): ListMergeRequestDiscussionsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListMergeRequestDiscussionsRequest {
        this['limit'] = limit;
        return this;
    }
}