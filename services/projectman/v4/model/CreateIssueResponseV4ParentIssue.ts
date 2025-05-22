

export class CreateIssueResponseV4ParentIssue {
    public id?: number;
    public name?: string;
    public constructor() { 
    }
    public withId(id: number): CreateIssueResponseV4ParentIssue {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateIssueResponseV4ParentIssue {
        this['name'] = name;
        return this;
    }
}