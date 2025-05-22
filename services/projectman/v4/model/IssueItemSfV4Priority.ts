

export class IssueItemSfV4Priority {
    public id?: number;
    public name?: string;
    public constructor() { 
    }
    public withId(id: number): IssueItemSfV4Priority {
        this['id'] = id;
        return this;
    }
    public withName(name: string): IssueItemSfV4Priority {
        this['name'] = name;
        return this;
    }
}