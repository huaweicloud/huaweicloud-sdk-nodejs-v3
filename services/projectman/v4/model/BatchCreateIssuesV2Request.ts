import { IssueCreateEntity } from './IssueCreateEntity';


export class BatchCreateIssuesV2Request {
    private 'project_id'?: string;
    public body?: Array<IssueCreateEntity>;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): BatchCreateIssuesV2Request {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: Array<IssueCreateEntity>): BatchCreateIssuesV2Request {
        this['body'] = body;
        return this;
    }
}