import { IssueRequestV4 } from './IssueRequestV4';


export class UpdateIssueV4Request {
    private 'project_id'?: string;
    private 'issue_id'?: number;
    public body?: IssueRequestV4;
    public constructor(projectId?: string, issueId?: number) { 
        this['project_id'] = projectId;
        this['issue_id'] = issueId;
    }
    public withProjectId(projectId: string): UpdateIssueV4Request {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withIssueId(issueId: number): UpdateIssueV4Request {
        this['issue_id'] = issueId;
        return this;
    }
    public set issueId(issueId: number  | undefined) {
        this['issue_id'] = issueId;
    }
    public get issueId(): number | undefined {
        return this['issue_id'];
    }
    public withBody(body: IssueRequestV4): UpdateIssueV4Request {
        this['body'] = body;
        return this;
    }
}