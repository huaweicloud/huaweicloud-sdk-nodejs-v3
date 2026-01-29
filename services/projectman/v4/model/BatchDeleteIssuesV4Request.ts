import { BatchDeleteIssuesRequestV4 } from './BatchDeleteIssuesRequestV4';


export class BatchDeleteIssuesV4Request {
    private 'project_id'?: string;
    public body?: BatchDeleteIssuesRequestV4;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): BatchDeleteIssuesV4Request {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: BatchDeleteIssuesRequestV4): BatchDeleteIssuesV4Request {
        this['body'] = body;
        return this;
    }
}