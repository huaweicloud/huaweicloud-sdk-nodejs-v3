

export class CancelAssociateIssueRequest {
    public projectUUId?: string;
    public attachProjectUUId?: string;
    public issueId?: number;
    public attachIssueId?: number;
    public constructor(projectUUId?: string, issueId?: number, attachIssueId?: number) { 
        this['projectUUId'] = projectUUId;
        this['issueId'] = issueId;
        this['attachIssueId'] = attachIssueId;
    }
    public withProjectUUId(projectUUId: string): CancelAssociateIssueRequest {
        this['projectUUId'] = projectUUId;
        return this;
    }
    public withAttachProjectUUId(attachProjectUUId: string): CancelAssociateIssueRequest {
        this['attachProjectUUId'] = attachProjectUUId;
        return this;
    }
    public withIssueId(issueId: number): CancelAssociateIssueRequest {
        this['issueId'] = issueId;
        return this;
    }
    public withAttachIssueId(attachIssueId: number): CancelAssociateIssueRequest {
        this['attachIssueId'] = attachIssueId;
        return this;
    }
}