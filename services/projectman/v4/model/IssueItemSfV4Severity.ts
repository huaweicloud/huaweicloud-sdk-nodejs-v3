

export class IssueItemSfV4Severity {
    public id?: number;
    public name?: string;
    public constructor() { 
    }
    public withId(id: number): IssueItemSfV4Severity {
        this['id'] = id;
        return this;
    }
    public withName(name: string): IssueItemSfV4Severity {
        this['name'] = name;
        return this;
    }
}