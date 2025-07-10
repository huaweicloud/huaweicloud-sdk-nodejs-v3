

export class ListMergeChangesTreesRequest {
    private 'repository_id'?: number;
    private 'merge_request_iid'?: string;
    public view?: ListMergeChangesTreesRequestViewEnum | string;
    private 'commit_id'?: string;
    public constructor(repositoryId?: number, mergeRequestIid?: string) { 
        this['repository_id'] = repositoryId;
        this['merge_request_iid'] = mergeRequestIid;
    }
    public withRepositoryId(repositoryId: number): ListMergeChangesTreesRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withMergeRequestIid(mergeRequestIid: string): ListMergeChangesTreesRequest {
        this['merge_request_iid'] = mergeRequestIid;
        return this;
    }
    public set mergeRequestIid(mergeRequestIid: string  | undefined) {
        this['merge_request_iid'] = mergeRequestIid;
    }
    public get mergeRequestIid(): string | undefined {
        return this['merge_request_iid'];
    }
    public withView(view: ListMergeChangesTreesRequestViewEnum | string): ListMergeChangesTreesRequest {
        this['view'] = view;
        return this;
    }
    public withCommitId(commitId: string): ListMergeChangesTreesRequest {
        this['commit_id'] = commitId;
        return this;
    }
    public set commitId(commitId: string  | undefined) {
        this['commit_id'] = commitId;
    }
    public get commitId(): string | undefined {
        return this['commit_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListMergeChangesTreesRequestViewEnum {
    SIMPLE = 'simple'
}
