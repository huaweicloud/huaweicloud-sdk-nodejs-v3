

export class ShowMergeRequestRequest {
    private 'repository_id'?: number;
    private 'merge_request_id'?: number;
    public constructor(repositoryId?: number, mergeRequestId?: number) { 
        this['repository_id'] = repositoryId;
        this['merge_request_id'] = mergeRequestId;
    }
    public withRepositoryId(repositoryId: number): ShowMergeRequestRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withMergeRequestId(mergeRequestId: number): ShowMergeRequestRequest {
        this['merge_request_id'] = mergeRequestId;
        return this;
    }
    public set mergeRequestId(mergeRequestId: number  | undefined) {
        this['merge_request_id'] = mergeRequestId;
    }
    public get mergeRequestId(): number | undefined {
        return this['merge_request_id'];
    }
}