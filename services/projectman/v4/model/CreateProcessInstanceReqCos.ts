

export class CreateProcessInstanceReqCos {
    private 'number'?: string;
    private 'issue_id'?: string;
    private 'issue_category'?: string;
    private 'change_type'?: string;
    private 'before_change'?: string;
    private 'after_change'?: string;
    public constructor() { 
    }
    public withModelNumber(modelNumber: string): CreateProcessInstanceReqCos {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
        return this['number'];
    }
    public withIssueId(issueId: string): CreateProcessInstanceReqCos {
        this['issue_id'] = issueId;
        return this;
    }
    public set issueId(issueId: string  | undefined) {
        this['issue_id'] = issueId;
    }
    public get issueId(): string | undefined {
        return this['issue_id'];
    }
    public withIssueCategory(issueCategory: string): CreateProcessInstanceReqCos {
        this['issue_category'] = issueCategory;
        return this;
    }
    public set issueCategory(issueCategory: string  | undefined) {
        this['issue_category'] = issueCategory;
    }
    public get issueCategory(): string | undefined {
        return this['issue_category'];
    }
    public withChangeType(changeType: string): CreateProcessInstanceReqCos {
        this['change_type'] = changeType;
        return this;
    }
    public set changeType(changeType: string  | undefined) {
        this['change_type'] = changeType;
    }
    public get changeType(): string | undefined {
        return this['change_type'];
    }
    public withBeforeChange(beforeChange: string): CreateProcessInstanceReqCos {
        this['before_change'] = beforeChange;
        return this;
    }
    public set beforeChange(beforeChange: string  | undefined) {
        this['before_change'] = beforeChange;
    }
    public get beforeChange(): string | undefined {
        return this['before_change'];
    }
    public withAfterChange(afterChange: string): CreateProcessInstanceReqCos {
        this['after_change'] = afterChange;
        return this;
    }
    public set afterChange(afterChange: string  | undefined) {
        this['after_change'] = afterChange;
    }
    public get afterChange(): string | undefined {
        return this['after_change'];
    }
}