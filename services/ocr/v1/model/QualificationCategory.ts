

export class QualificationCategory {
    public category?: string;
    private 'initial_issue_date'?: string | undefined;
    private 'issue_date'?: string | undefined;
    private 'expiry_date'?: string | undefined;
    public constructor() { 
    }
    public withCategory(category: string): QualificationCategory {
        this['category'] = category;
        return this;
    }
    public withInitialIssueDate(initialIssueDate: string): QualificationCategory {
        this['initial_issue_date'] = initialIssueDate;
        return this;
    }
    public set initialIssueDate(initialIssueDate: string | undefined) {
        this['initial_issue_date'] = initialIssueDate;
    }
    public get initialIssueDate() {
        return this['initial_issue_date'];
    }
    public withIssueDate(issueDate: string): QualificationCategory {
        this['issue_date'] = issueDate;
        return this;
    }
    public set issueDate(issueDate: string | undefined) {
        this['issue_date'] = issueDate;
    }
    public get issueDate() {
        return this['issue_date'];
    }
    public withExpiryDate(expiryDate: string): QualificationCategory {
        this['expiry_date'] = expiryDate;
        return this;
    }
    public set expiryDate(expiryDate: string | undefined) {
        this['expiry_date'] = expiryDate;
    }
    public get expiryDate() {
        return this['expiry_date'];
    }
}