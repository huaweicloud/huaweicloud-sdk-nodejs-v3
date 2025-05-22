

export class BatchListAssociatedIssuesRequest {
    private 'project_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): BatchListAssociatedIssuesRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withLimit(limit: number): BatchListAssociatedIssuesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): BatchListAssociatedIssuesRequest {
        this['offset'] = offset;
        return this;
    }
}