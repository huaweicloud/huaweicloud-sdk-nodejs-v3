

export class ListMergeRequestReviewersRequest {
    private 'repository_id'?: string;
    private 'merge_request_iid'?: number;
    public page?: number;
    private 'per_page'?: number;
    public constructor(repositoryId?: string, mergeRequestIid?: number) { 
        this['repository_id'] = repositoryId;
        this['merge_request_iid'] = mergeRequestIid;
    }
    public withRepositoryId(repositoryId: string): ListMergeRequestReviewersRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: string  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): string | undefined {
        return this['repository_id'];
    }
    public withMergeRequestIid(mergeRequestIid: number): ListMergeRequestReviewersRequest {
        this['merge_request_iid'] = mergeRequestIid;
        return this;
    }
    public set mergeRequestIid(mergeRequestIid: number  | undefined) {
        this['merge_request_iid'] = mergeRequestIid;
    }
    public get mergeRequestIid(): number | undefined {
        return this['merge_request_iid'];
    }
    public withPage(page: number): ListMergeRequestReviewersRequest {
        this['page'] = page;
        return this;
    }
    public withPerPage(perPage: number): ListMergeRequestReviewersRequest {
        this['per_page'] = perPage;
        return this;
    }
    public set perPage(perPage: number  | undefined) {
        this['per_page'] = perPage;
    }
    public get perPage(): number | undefined {
        return this['per_page'];
    }
}