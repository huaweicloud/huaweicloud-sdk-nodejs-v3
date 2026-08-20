

export class SprintSnapshotsCreateParam {
    public title?: string;
    private 'issue_id'?: string;
    public category?: string;
    public constructor(title?: string, issueId?: string, category?: string) { 
        this['title'] = title;
        this['issue_id'] = issueId;
        this['category'] = category;
    }
    public withTitle(title: string): SprintSnapshotsCreateParam {
        this['title'] = title;
        return this;
    }
    public withIssueId(issueId: string): SprintSnapshotsCreateParam {
        this['issue_id'] = issueId;
        return this;
    }
    public set issueId(issueId: string  | undefined) {
        this['issue_id'] = issueId;
    }
    public get issueId(): string | undefined {
        return this['issue_id'];
    }
    public withCategory(category: string): SprintSnapshotsCreateParam {
        this['category'] = category;
        return this;
    }
}