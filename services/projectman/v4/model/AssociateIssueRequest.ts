

export class AssociateIssueRequest {
    public projectUUId?: string;
    public attachProjectUUId?: string;
    public issueId?: number;
    public associatedIssueIdList?: Array<string>;
    public unassociatedIssueIdList?: Array<string>;
    public constructor(projectUUId?: string, issueId?: number) { 
        this['projectUUId'] = projectUUId;
        this['issueId'] = issueId;
    }
    public withProjectUUId(projectUUId: string): AssociateIssueRequest {
        this['projectUUId'] = projectUUId;
        return this;
    }
    public withAttachProjectUUId(attachProjectUUId: string): AssociateIssueRequest {
        this['attachProjectUUId'] = attachProjectUUId;
        return this;
    }
    public withIssueId(issueId: number): AssociateIssueRequest {
        this['issueId'] = issueId;
        return this;
    }
    public withAssociatedIssueIdList(associatedIssueIdList: Array<string>): AssociateIssueRequest {
        this['associatedIssueIdList'] = associatedIssueIdList;
        return this;
    }
    public withUnassociatedIssueIdList(unassociatedIssueIdList: Array<string>): AssociateIssueRequest {
        this['unassociatedIssueIdList'] = unassociatedIssueIdList;
        return this;
    }
}