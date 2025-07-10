

export class CommitRepoV2 {
    public id?: string;
    private 'short_id'?: string;
    private 'created_at'?: string;
    public title?: string;
    private 'parent_ids'?: Array<string>;
    public message?: string;
    private 'author_name'?: string;
    private 'committer_name'?: string;
    private 'committed_date'?: Date;
    public constructor() { 
    }
    public withId(id: string): CommitRepoV2 {
        this['id'] = id;
        return this;
    }
    public withShortId(shortId: string): CommitRepoV2 {
        this['short_id'] = shortId;
        return this;
    }
    public set shortId(shortId: string  | undefined) {
        this['short_id'] = shortId;
    }
    public get shortId(): string | undefined {
        return this['short_id'];
    }
    public withCreatedAt(createdAt: string): CommitRepoV2 {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withTitle(title: string): CommitRepoV2 {
        this['title'] = title;
        return this;
    }
    public withParentIds(parentIds: Array<string>): CommitRepoV2 {
        this['parent_ids'] = parentIds;
        return this;
    }
    public set parentIds(parentIds: Array<string>  | undefined) {
        this['parent_ids'] = parentIds;
    }
    public get parentIds(): Array<string> | undefined {
        return this['parent_ids'];
    }
    public withMessage(message: string): CommitRepoV2 {
        this['message'] = message;
        return this;
    }
    public withAuthorName(authorName: string): CommitRepoV2 {
        this['author_name'] = authorName;
        return this;
    }
    public set authorName(authorName: string  | undefined) {
        this['author_name'] = authorName;
    }
    public get authorName(): string | undefined {
        return this['author_name'];
    }
    public withCommitterName(committerName: string): CommitRepoV2 {
        this['committer_name'] = committerName;
        return this;
    }
    public set committerName(committerName: string  | undefined) {
        this['committer_name'] = committerName;
    }
    public get committerName(): string | undefined {
        return this['committer_name'];
    }
    public withCommittedDate(committedDate: Date): CommitRepoV2 {
        this['committed_date'] = committedDate;
        return this;
    }
    public set committedDate(committedDate: Date  | undefined) {
        this['committed_date'] = committedDate;
    }
    public get committedDate(): Date | undefined {
        return this['committed_date'];
    }
}