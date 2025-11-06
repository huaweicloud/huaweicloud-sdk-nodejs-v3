

export class ListMergeRequestCommitsRequest {
    private 'repository_id'?: number;
    private 'merge_request_iid'?: number;
    public view?: ListMergeRequestCommitsRequestViewEnum | string;
    public offset?: number;
    public limit?: number;
    public constructor(repositoryId?: number, mergeRequestIid?: number) { 
        this['repository_id'] = repositoryId;
        this['merge_request_iid'] = mergeRequestIid;
    }
    public withRepositoryId(repositoryId: number): ListMergeRequestCommitsRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withMergeRequestIid(mergeRequestIid: number): ListMergeRequestCommitsRequest {
        this['merge_request_iid'] = mergeRequestIid;
        return this;
    }
    public set mergeRequestIid(mergeRequestIid: number  | undefined) {
        this['merge_request_iid'] = mergeRequestIid;
    }
    public get mergeRequestIid(): number | undefined {
        return this['merge_request_iid'];
    }
    public withView(view: ListMergeRequestCommitsRequestViewEnum | string): ListMergeRequestCommitsRequest {
        this['view'] = view;
        return this;
    }
    public withOffset(offset: number): ListMergeRequestCommitsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListMergeRequestCommitsRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListMergeRequestCommitsRequestViewEnum {
    SIMPLE = 'simple'
}
