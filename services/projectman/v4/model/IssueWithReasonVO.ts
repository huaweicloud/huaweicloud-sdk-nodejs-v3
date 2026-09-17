

export class IssueWithReasonVO {
    public id?: string;
    public category?: string;
    public title?: string;
    private 'number'?: string;
    public reason?: string;
    public constructor() { 
    }
    public withId(id: string): IssueWithReasonVO {
        this['id'] = id;
        return this;
    }
    public withCategory(category: string): IssueWithReasonVO {
        this['category'] = category;
        return this;
    }
    public withTitle(title: string): IssueWithReasonVO {
        this['title'] = title;
        return this;
    }
    public withModelNumber(modelNumber: string): IssueWithReasonVO {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
        return this['number'];
    }
    public withReason(reason: string): IssueWithReasonVO {
        this['reason'] = reason;
        return this;
    }
}