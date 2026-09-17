

export class WorkItemFlowVO {
    public id?: string;
    private 'issue_category'?: string;
    private 'flow_code'?: string;
    private 'issue_ids'?: Array<string>;
    private 'process_context'?: { [key: string]: object; };
    public constructor(issueCategory?: string, flowCode?: string) { 
        this['issue_category'] = issueCategory;
        this['flow_code'] = flowCode;
    }
    public withId(id: string): WorkItemFlowVO {
        this['id'] = id;
        return this;
    }
    public withIssueCategory(issueCategory: string): WorkItemFlowVO {
        this['issue_category'] = issueCategory;
        return this;
    }
    public set issueCategory(issueCategory: string  | undefined) {
        this['issue_category'] = issueCategory;
    }
    public get issueCategory(): string | undefined {
        return this['issue_category'];
    }
    public withFlowCode(flowCode: string): WorkItemFlowVO {
        this['flow_code'] = flowCode;
        return this;
    }
    public set flowCode(flowCode: string  | undefined) {
        this['flow_code'] = flowCode;
    }
    public get flowCode(): string | undefined {
        return this['flow_code'];
    }
    public withIssueIds(issueIds: Array<string>): WorkItemFlowVO {
        this['issue_ids'] = issueIds;
        return this;
    }
    public set issueIds(issueIds: Array<string>  | undefined) {
        this['issue_ids'] = issueIds;
    }
    public get issueIds(): Array<string> | undefined {
        return this['issue_ids'];
    }
    public withProcessContext(processContext: { [key: string]: object; }): WorkItemFlowVO {
        this['process_context'] = processContext;
        return this;
    }
    public set processContext(processContext: { [key: string]: object; }  | undefined) {
        this['process_context'] = processContext;
    }
    public get processContext(): { [key: string]: object; } | undefined {
        return this['process_context'];
    }
}