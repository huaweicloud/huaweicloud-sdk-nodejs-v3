

export class ShowMergeRequestDiscussionRequest {
    private 'repository_id'?: number;
    private 'merge_request_iid'?: number;
    private 'discussion_id'?: string;
    public constructor(repositoryId?: number, mergeRequestIid?: number, discussionId?: string) { 
        this['repository_id'] = repositoryId;
        this['merge_request_iid'] = mergeRequestIid;
        this['discussion_id'] = discussionId;
    }
    public withRepositoryId(repositoryId: number): ShowMergeRequestDiscussionRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withMergeRequestIid(mergeRequestIid: number): ShowMergeRequestDiscussionRequest {
        this['merge_request_iid'] = mergeRequestIid;
        return this;
    }
    public set mergeRequestIid(mergeRequestIid: number  | undefined) {
        this['merge_request_iid'] = mergeRequestIid;
    }
    public get mergeRequestIid(): number | undefined {
        return this['merge_request_iid'];
    }
    public withDiscussionId(discussionId: string): ShowMergeRequestDiscussionRequest {
        this['discussion_id'] = discussionId;
        return this;
    }
    public set discussionId(discussionId: string  | undefined) {
        this['discussion_id'] = discussionId;
    }
    public get discussionId(): string | undefined {
        return this['discussion_id'];
    }
}