

export class ListMergeRequestParticipantsRequest {
    private 'repository_id'?: number;
    private 'merge_request_iid'?: number;
    public offset?: number;
    public limit?: number;
    public constructor(repositoryId?: number, mergeRequestIid?: number) { 
        this['repository_id'] = repositoryId;
        this['merge_request_iid'] = mergeRequestIid;
    }
    public withRepositoryId(repositoryId: number): ListMergeRequestParticipantsRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withMergeRequestIid(mergeRequestIid: number): ListMergeRequestParticipantsRequest {
        this['merge_request_iid'] = mergeRequestIid;
        return this;
    }
    public set mergeRequestIid(mergeRequestIid: number  | undefined) {
        this['merge_request_iid'] = mergeRequestIid;
    }
    public get mergeRequestIid(): number | undefined {
        return this['merge_request_iid'];
    }
    public withOffset(offset: number): ListMergeRequestParticipantsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListMergeRequestParticipantsRequest {
        this['limit'] = limit;
        return this;
    }
}