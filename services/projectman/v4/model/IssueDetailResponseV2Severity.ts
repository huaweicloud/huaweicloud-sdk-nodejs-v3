

export class IssueDetailResponseV2Severity {
    public id?: number;
    public name?: string;
    public constructor() { 
    }
    public withId(id: number): IssueDetailResponseV2Severity {
        this['id'] = id;
        return this;
    }
    public withName(name: string): IssueDetailResponseV2Severity {
        this['name'] = name;
        return this;
    }
}