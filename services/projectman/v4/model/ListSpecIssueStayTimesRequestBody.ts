

export class ListSpecIssueStayTimesRequestBody {
    private 'project_id'?: string;
    private 'issue_ids'?: Array<string>;
    public constructor() { 
    }
    public withProjectId(projectId: string): ListSpecIssueStayTimesRequestBody {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withIssueIds(issueIds: Array<string>): ListSpecIssueStayTimesRequestBody {
        this['issue_ids'] = issueIds;
        return this;
    }
    public set issueIds(issueIds: Array<string>  | undefined) {
        this['issue_ids'] = issueIds;
    }
    public get issueIds(): Array<string> | undefined {
        return this['issue_ids'];
    }
}