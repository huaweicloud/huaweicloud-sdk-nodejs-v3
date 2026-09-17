import { QueryVO } from './QueryVO';


export class ShowTenantIssueListRequest {
    private 'project_id'?: string;
    private 'issue_type'?: string;
    public body?: QueryVO;
    public constructor() { 
    }
    public withProjectId(projectId: string): ShowTenantIssueListRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withIssueType(issueType: string): ShowTenantIssueListRequest {
        this['issue_type'] = issueType;
        return this;
    }
    public set issueType(issueType: string  | undefined) {
        this['issue_type'] = issueType;
    }
    public get issueType(): string | undefined {
        return this['issue_type'];
    }
    public withBody(body: QueryVO): ShowTenantIssueListRequest {
        this['body'] = body;
        return this;
    }
}