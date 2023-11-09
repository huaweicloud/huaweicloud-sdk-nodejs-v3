

export class CommitsCommits {
    public sha?: string;
    public message?: string;
    private 'authored_date'?: string;
    public constructor(sha?: string, message?: string, authoredDate?: string) { 
        this['sha'] = sha;
        this['message'] = message;
        this['authored_date'] = authoredDate;
    }
    public withSha(sha: string): CommitsCommits {
        this['sha'] = sha;
        return this;
    }
    public withMessage(message: string): CommitsCommits {
        this['message'] = message;
        return this;
    }
    public withAuthoredDate(authoredDate: string): CommitsCommits {
        this['authored_date'] = authoredDate;
        return this;
    }
    public set authoredDate(authoredDate: string  | undefined) {
        this['authored_date'] = authoredDate;
    }
    public get authoredDate(): string | undefined {
        return this['authored_date'];
    }
}