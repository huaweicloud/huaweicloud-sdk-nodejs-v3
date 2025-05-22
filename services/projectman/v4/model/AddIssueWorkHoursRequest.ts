import { AddIssueWorkHoursRequestBody } from './AddIssueWorkHoursRequestBody';


export class AddIssueWorkHoursRequest {
    private 'project_id'?: string;
    private 'issue_id'?: number;
    public body?: AddIssueWorkHoursRequestBody;
    public constructor(projectId?: string, issueId?: number) { 
        this['project_id'] = projectId;
        this['issue_id'] = issueId;
    }
    public withProjectId(projectId: string): AddIssueWorkHoursRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withIssueId(issueId: number): AddIssueWorkHoursRequest {
        this['issue_id'] = issueId;
        return this;
    }
    public set issueId(issueId: number  | undefined) {
        this['issue_id'] = issueId;
    }
    public get issueId(): number | undefined {
        return this['issue_id'];
    }
    public withBody(body: AddIssueWorkHoursRequestBody): AddIssueWorkHoursRequest {
        this['body'] = body;
        return this;
    }
}