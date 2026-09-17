

export class IssueDetailResponseV2ParentIssue {
    public id?: number;
    public name?: string;
    public constructor() { 
    }
    public withId(id: number): IssueDetailResponseV2ParentIssue {
        this['id'] = id;
        return this;
    }
    public withName(name: string): IssueDetailResponseV2ParentIssue {
        this['name'] = name;
        return this;
    }
}