

export class CommitInfo {
    public id?: string;
    private 'short_id'?: string;
    public title?: string;
    private 'author_name'?: string;
    private 'author_email'?: string;
    private 'committer_name'?: string;
    private 'committer_email'?: string;
    private 'created_at'?: string;
    public message?: string;
    private 'parent_ids'?: Array<string>;
    private 'committed_date'?: Date;
    private 'authored_date'?: Date;
    public constructor() { 
    }
    public withId(id: string): CommitInfo {
        this['id'] = id;
        return this;
    }
    public withShortId(shortId: string): CommitInfo {
        this['short_id'] = shortId;
        return this;
    }
    public set shortId(shortId: string  | undefined) {
        this['short_id'] = shortId;
    }
    public get shortId(): string | undefined {
        return this['short_id'];
    }
    public withTitle(title: string): CommitInfo {
        this['title'] = title;
        return this;
    }
    public withAuthorName(authorName: string): CommitInfo {
        this['author_name'] = authorName;
        return this;
    }
    public set authorName(authorName: string  | undefined) {
        this['author_name'] = authorName;
    }
    public get authorName(): string | undefined {
        return this['author_name'];
    }
    public withAuthorEmail(authorEmail: string): CommitInfo {
        this['author_email'] = authorEmail;
        return this;
    }
    public set authorEmail(authorEmail: string  | undefined) {
        this['author_email'] = authorEmail;
    }
    public get authorEmail(): string | undefined {
        return this['author_email'];
    }
    public withCommitterName(committerName: string): CommitInfo {
        this['committer_name'] = committerName;
        return this;
    }
    public set committerName(committerName: string  | undefined) {
        this['committer_name'] = committerName;
    }
    public get committerName(): string | undefined {
        return this['committer_name'];
    }
    public withCommitterEmail(committerEmail: string): CommitInfo {
        this['committer_email'] = committerEmail;
        return this;
    }
    public set committerEmail(committerEmail: string  | undefined) {
        this['committer_email'] = committerEmail;
    }
    public get committerEmail(): string | undefined {
        return this['committer_email'];
    }
    public withCreatedAt(createdAt: string): CommitInfo {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withMessage(message: string): CommitInfo {
        this['message'] = message;
        return this;
    }
    public withParentIds(parentIds: Array<string>): CommitInfo {
        this['parent_ids'] = parentIds;
        return this;
    }
    public set parentIds(parentIds: Array<string>  | undefined) {
        this['parent_ids'] = parentIds;
    }
    public get parentIds(): Array<string> | undefined {
        return this['parent_ids'];
    }
    public withCommittedDate(committedDate: Date): CommitInfo {
        this['committed_date'] = committedDate;
        return this;
    }
    public set committedDate(committedDate: Date  | undefined) {
        this['committed_date'] = committedDate;
    }
    public get committedDate(): Date | undefined {
        return this['committed_date'];
    }
    public withAuthoredDate(authoredDate: Date): CommitInfo {
        this['authored_date'] = authoredDate;
        return this;
    }
    public set authoredDate(authoredDate: Date  | undefined) {
        this['authored_date'] = authoredDate;
    }
    public get authoredDate(): Date | undefined {
        return this['authored_date'];
    }
}