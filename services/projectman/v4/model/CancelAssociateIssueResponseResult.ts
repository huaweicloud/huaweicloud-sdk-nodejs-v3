

export class CancelAssociateIssueResponseResult {
    public identifier?: string;
    public issueId?: number;
    public projectId?: number;
    public associateType?: string;
    public associateIssueId?: number;
    public associateProjectId?: number;
    public createdOn?: Date;
    public authorId?: number;
    public flag?: boolean;
    public constructor() { 
    }
    public withIdentifier(identifier: string): CancelAssociateIssueResponseResult {
        this['identifier'] = identifier;
        return this;
    }
    public withIssueId(issueId: number): CancelAssociateIssueResponseResult {
        this['issueId'] = issueId;
        return this;
    }
    public withProjectId(projectId: number): CancelAssociateIssueResponseResult {
        this['projectId'] = projectId;
        return this;
    }
    public withAssociateType(associateType: string): CancelAssociateIssueResponseResult {
        this['associateType'] = associateType;
        return this;
    }
    public withAssociateIssueId(associateIssueId: number): CancelAssociateIssueResponseResult {
        this['associateIssueId'] = associateIssueId;
        return this;
    }
    public withAssociateProjectId(associateProjectId: number): CancelAssociateIssueResponseResult {
        this['associateProjectId'] = associateProjectId;
        return this;
    }
    public withCreatedOn(createdOn: Date): CancelAssociateIssueResponseResult {
        this['createdOn'] = createdOn;
        return this;
    }
    public withAuthorId(authorId: number): CancelAssociateIssueResponseResult {
        this['authorId'] = authorId;
        return this;
    }
    public withFlag(flag: boolean): CancelAssociateIssueResponseResult {
        this['flag'] = flag;
        return this;
    }
}