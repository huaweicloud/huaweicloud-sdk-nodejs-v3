

export class IssueItemSfV4Iteration {
    public id?: number;
    public name?: string;
    public constructor() { 
    }
    public withId(id: number): IssueItemSfV4Iteration {
        this['id'] = id;
        return this;
    }
    public withName(name: string): IssueItemSfV4Iteration {
        this['name'] = name;
        return this;
    }
}