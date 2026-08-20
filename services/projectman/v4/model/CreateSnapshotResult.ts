

export class CreateSnapshotResult {
    public id?: string;
    public title?: string;
    public category?: string;
    private 'issue_id'?: string;
    private 'created_by'?: string;
    public deletable?: boolean;
    public errormsg?: string;
    public constructor() { 
    }
    public withId(id: string): CreateSnapshotResult {
        this['id'] = id;
        return this;
    }
    public withTitle(title: string): CreateSnapshotResult {
        this['title'] = title;
        return this;
    }
    public withCategory(category: string): CreateSnapshotResult {
        this['category'] = category;
        return this;
    }
    public withIssueId(issueId: string): CreateSnapshotResult {
        this['issue_id'] = issueId;
        return this;
    }
    public set issueId(issueId: string  | undefined) {
        this['issue_id'] = issueId;
    }
    public get issueId(): string | undefined {
        return this['issue_id'];
    }
    public withCreatedBy(createdBy: string): CreateSnapshotResult {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: string  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): string | undefined {
        return this['created_by'];
    }
    public withDeletable(deletable: boolean): CreateSnapshotResult {
        this['deletable'] = deletable;
        return this;
    }
    public withErrormsg(errormsg: string): CreateSnapshotResult {
        this['errormsg'] = errormsg;
        return this;
    }
}