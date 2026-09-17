import { BatchUpdateIssuesParam } from './BatchUpdateIssuesParam';


export class BatchUpdateIpdIssuesRequest {
    private 'project_id'?: string;
    public body?: BatchUpdateIssuesParam;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): BatchUpdateIpdIssuesRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: BatchUpdateIssuesParam): BatchUpdateIpdIssuesRequest {
        this['body'] = body;
        return this;
    }
}