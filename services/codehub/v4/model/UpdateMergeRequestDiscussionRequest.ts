import { UpdateMergeRequestNoteDto } from './UpdateMergeRequestNoteDto';


export class UpdateMergeRequestDiscussionRequest {
    private 'repository_id'?: number;
    private 'merge_request_iid'?: number;
    private 'discussion_id'?: string;
    private 'note_id'?: number;
    public body?: UpdateMergeRequestNoteDto;
    public constructor(repositoryId?: number, mergeRequestIid?: number, discussionId?: string, noteId?: number) { 
        this['repository_id'] = repositoryId;
        this['merge_request_iid'] = mergeRequestIid;
        this['discussion_id'] = discussionId;
        this['note_id'] = noteId;
    }
    public withRepositoryId(repositoryId: number): UpdateMergeRequestDiscussionRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withMergeRequestIid(mergeRequestIid: number): UpdateMergeRequestDiscussionRequest {
        this['merge_request_iid'] = mergeRequestIid;
        return this;
    }
    public set mergeRequestIid(mergeRequestIid: number  | undefined) {
        this['merge_request_iid'] = mergeRequestIid;
    }
    public get mergeRequestIid(): number | undefined {
        return this['merge_request_iid'];
    }
    public withDiscussionId(discussionId: string): UpdateMergeRequestDiscussionRequest {
        this['discussion_id'] = discussionId;
        return this;
    }
    public set discussionId(discussionId: string  | undefined) {
        this['discussion_id'] = discussionId;
    }
    public get discussionId(): string | undefined {
        return this['discussion_id'];
    }
    public withNoteId(noteId: number): UpdateMergeRequestDiscussionRequest {
        this['note_id'] = noteId;
        return this;
    }
    public set noteId(noteId: number  | undefined) {
        this['note_id'] = noteId;
    }
    public get noteId(): number | undefined {
        return this['note_id'];
    }
    public withBody(body: UpdateMergeRequestNoteDto): UpdateMergeRequestDiscussionRequest {
        this['body'] = body;
        return this;
    }
}