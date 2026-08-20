import { BatchBaselineIpdIssuesParam } from './BatchBaselineIpdIssuesParam';


export class BatchBaselineIpdIssuesRequest {
    private 'project_id'?: string;
    public body?: BatchBaselineIpdIssuesParam;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): BatchBaselineIpdIssuesRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: BatchBaselineIpdIssuesParam): BatchBaselineIpdIssuesRequest {
        this['body'] = body;
        return this;
    }
}