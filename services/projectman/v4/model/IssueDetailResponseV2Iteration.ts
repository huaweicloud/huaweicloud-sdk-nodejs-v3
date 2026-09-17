

export class IssueDetailResponseV2Iteration {
    public id?: number;
    public name?: string;
    public constructor() { 
    }
    public withId(id: number): IssueDetailResponseV2Iteration {
        this['id'] = id;
        return this;
    }
    public withName(name: string): IssueDetailResponseV2Iteration {
        this['name'] = name;
        return this;
    }
}