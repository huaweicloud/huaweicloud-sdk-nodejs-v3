

export class Commit {
    private 'author_email'?: string;
    private 'author_name'?: string;
    private 'authored_date'?: Date;
    private 'committed_date'?: Date;
    private 'committer_email'?: string;
    private 'committer_name'?: string;
    public format?: object;
    public id?: string;
    public message?: string;
    private 'parent_ids'?: Array<string>;
    public constructor() { 
    }
    public withAuthorEmail(authorEmail: string): Commit {
        this['author_email'] = authorEmail;
        return this;
    }
    public set authorEmail(authorEmail: string  | undefined) {
        this['author_email'] = authorEmail;
    }
    public get authorEmail(): string | undefined {
        return this['author_email'];
    }
    public withAuthorName(authorName: string): Commit {
        this['author_name'] = authorName;
        return this;
    }
    public set authorName(authorName: string  | undefined) {
        this['author_name'] = authorName;
    }
    public get authorName(): string | undefined {
        return this['author_name'];
    }
    public withAuthoredDate(authoredDate: Date): Commit {
        this['authored_date'] = authoredDate;
        return this;
    }
    public set authoredDate(authoredDate: Date  | undefined) {
        this['authored_date'] = authoredDate;
    }
    public get authoredDate(): Date | undefined {
        return this['authored_date'];
    }
    public withCommittedDate(committedDate: Date): Commit {
        this['committed_date'] = committedDate;
        return this;
    }
    public set committedDate(committedDate: Date  | undefined) {
        this['committed_date'] = committedDate;
    }
    public get committedDate(): Date | undefined {
        return this['committed_date'];
    }
    public withCommitterEmail(committerEmail: string): Commit {
        this['committer_email'] = committerEmail;
        return this;
    }
    public set committerEmail(committerEmail: string  | undefined) {
        this['committer_email'] = committerEmail;
    }
    public get committerEmail(): string | undefined {
        return this['committer_email'];
    }
    public withCommitterName(committerName: string): Commit {
        this['committer_name'] = committerName;
        return this;
    }
    public set committerName(committerName: string  | undefined) {
        this['committer_name'] = committerName;
    }
    public get committerName(): string | undefined {
        return this['committer_name'];
    }
    public withFormat(format: object): Commit {
        this['format'] = format;
        return this;
    }
    public withId(id: string): Commit {
        this['id'] = id;
        return this;
    }
    public withMessage(message: string): Commit {
        this['message'] = message;
        return this;
    }
    public withParentIds(parentIds: Array<string>): Commit {
        this['parent_ids'] = parentIds;
        return this;
    }
    public set parentIds(parentIds: Array<string>  | undefined) {
        this['parent_ids'] = parentIds;
    }
    public get parentIds(): Array<string> | undefined {
        return this['parent_ids'];
    }
}