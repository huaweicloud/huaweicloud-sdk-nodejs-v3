

export class CommitV2 {
    private 'committed_date'?: string;
    private 'committer_name'?: string;
    public id?: string;
    public message?: string;
    private 'short_id'?: string;
    public title?: string;
    public constructor() { 
    }
    public withCommittedDate(committedDate: string): CommitV2 {
        this['committed_date'] = committedDate;
        return this;
    }
    public set committedDate(committedDate: string  | undefined) {
        this['committed_date'] = committedDate;
    }
    public get committedDate(): string | undefined {
        return this['committed_date'];
    }
    public withCommitterName(committerName: string): CommitV2 {
        this['committer_name'] = committerName;
        return this;
    }
    public set committerName(committerName: string  | undefined) {
        this['committer_name'] = committerName;
    }
    public get committerName(): string | undefined {
        return this['committer_name'];
    }
    public withId(id: string): CommitV2 {
        this['id'] = id;
        return this;
    }
    public withMessage(message: string): CommitV2 {
        this['message'] = message;
        return this;
    }
    public withShortId(shortId: string): CommitV2 {
        this['short_id'] = shortId;
        return this;
    }
    public set shortId(shortId: string  | undefined) {
        this['short_id'] = shortId;
    }
    public get shortId(): string | undefined {
        return this['short_id'];
    }
    public withTitle(title: string): CommitV2 {
        this['title'] = title;
        return this;
    }
}