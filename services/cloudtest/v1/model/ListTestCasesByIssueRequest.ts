import { QueryTestCasesByIssueInfo } from './QueryTestCasesByIssueInfo';


export class ListTestCasesByIssueRequest {
    private 'project_id'?: string;
    private 'issue_id'?: string;
    public body?: QueryTestCasesByIssueInfo;
    public constructor(projectId?: string, issueId?: string) { 
        this['project_id'] = projectId;
        this['issue_id'] = issueId;
    }
    public withProjectId(projectId: string): ListTestCasesByIssueRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withIssueId(issueId: string): ListTestCasesByIssueRequest {
        this['issue_id'] = issueId;
        return this;
    }
    public set issueId(issueId: string  | undefined) {
        this['issue_id'] = issueId;
    }
    public get issueId(): string | undefined {
        return this['issue_id'];
    }
    public withBody(body: QueryTestCasesByIssueInfo): ListTestCasesByIssueRequest {
        this['body'] = body;
        return this;
    }
}