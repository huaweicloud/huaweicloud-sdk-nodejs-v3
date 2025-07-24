

export class BatchDeleteTestReportRequest {
    private 'project_id'?: string;
    public body?: Array<string>;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): BatchDeleteTestReportRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: Array<string>): BatchDeleteTestReportRequest {
        this['body'] = body;
        return this;
    }
}