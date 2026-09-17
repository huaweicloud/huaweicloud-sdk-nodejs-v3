

export class BatchDeleteModuleRequestBody {
    private 'project_id'?: string;
    private 'issue_ids'?: string;
    public constructor() { 
    }
    public withProjectId(projectId: string): BatchDeleteModuleRequestBody {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withIssueIds(issueIds: string): BatchDeleteModuleRequestBody {
        this['issue_ids'] = issueIds;
        return this;
    }
    public set issueIds(issueIds: string  | undefined) {
        this['issue_ids'] = issueIds;
    }
    public get issueIds(): string | undefined {
        return this['issue_ids'];
    }
}