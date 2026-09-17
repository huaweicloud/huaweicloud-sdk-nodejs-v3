

export class IssueDetailResponseV2Priority {
    public id?: number;
    public name?: string;
    public constructor() { 
    }
    public withId(id: number): IssueDetailResponseV2Priority {
        this['id'] = id;
        return this;
    }
    public withName(name: string): IssueDetailResponseV2Priority {
        this['name'] = name;
        return this;
    }
}