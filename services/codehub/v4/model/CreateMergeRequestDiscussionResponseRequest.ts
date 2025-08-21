import { ReplyMergeRequestNoteDto } from './ReplyMergeRequestNoteDto';


export class CreateMergeRequestDiscussionResponseRequest {
    private 'repository_id'?: number;
    private 'merge_request_iid'?: number;
    private 'discussion_id'?: string;
    public body?: ReplyMergeRequestNoteDto;
    public constructor(repositoryId?: number, mergeRequestIid?: number, discussionId?: string) { 
        this['repository_id'] = repositoryId;
        this['merge_request_iid'] = mergeRequestIid;
        this['discussion_id'] = discussionId;
    }
    public withRepositoryId(repositoryId: number): CreateMergeRequestDiscussionResponseRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withMergeRequestIid(mergeRequestIid: number): CreateMergeRequestDiscussionResponseRequest {
        this['merge_request_iid'] = mergeRequestIid;
        return this;
    }
    public set mergeRequestIid(mergeRequestIid: number  | undefined) {
        this['merge_request_iid'] = mergeRequestIid;
    }
    public get mergeRequestIid(): number | undefined {
        return this['merge_request_iid'];
    }
    public withDiscussionId(discussionId: string): CreateMergeRequestDiscussionResponseRequest {
        this['discussion_id'] = discussionId;
        return this;
    }
    public set discussionId(discussionId: string  | undefined) {
        this['discussion_id'] = discussionId;
    }
    public get discussionId(): string | undefined {
        return this['discussion_id'];
    }
    public withBody(body: ReplyMergeRequestNoteDto): CreateMergeRequestDiscussionResponseRequest {
        this['body'] = body;
        return this;
    }
}