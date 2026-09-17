

export class BatchUpdateRequest {
    private 'assigned_to_id'?: string;
    private 'issue_ids'?: string;
    private 'project_id'?: string;
    public constructor() { 
    }
    public withAssignedToId(assignedToId: string): BatchUpdateRequest {
        this['assigned_to_id'] = assignedToId;
        return this;
    }
    public set assignedToId(assignedToId: string  | undefined) {
        this['assigned_to_id'] = assignedToId;
    }
    public get assignedToId(): string | undefined {
        return this['assigned_to_id'];
    }
    public withIssueIds(issueIds: string): BatchUpdateRequest {
        this['issue_ids'] = issueIds;
        return this;
    }
    public set issueIds(issueIds: string  | undefined) {
        this['issue_ids'] = issueIds;
    }
    public get issueIds(): string | undefined {
        return this['issue_ids'];
    }
    public withProjectId(projectId: string): BatchUpdateRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
}