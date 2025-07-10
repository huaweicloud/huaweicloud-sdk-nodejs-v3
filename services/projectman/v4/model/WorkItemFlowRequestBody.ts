

export class WorkItemFlowRequestBody {
    public id?: string;
    private 'issue_category'?: string;
    private 'flow_code'?: string;
    public constructor() { 
    }
    public withId(id: string): WorkItemFlowRequestBody {
        this['id'] = id;
        return this;
    }
    public withIssueCategory(issueCategory: string): WorkItemFlowRequestBody {
        this['issue_category'] = issueCategory;
        return this;
    }
    public set issueCategory(issueCategory: string  | undefined) {
        this['issue_category'] = issueCategory;
    }
    public get issueCategory(): string | undefined {
        return this['issue_category'];
    }
    public withFlowCode(flowCode: string): WorkItemFlowRequestBody {
        this['flow_code'] = flowCode;
        return this;
    }
    public set flowCode(flowCode: string  | undefined) {
        this['flow_code'] = flowCode;
    }
    public get flowCode(): string | undefined {
        return this['flow_code'];
    }
}