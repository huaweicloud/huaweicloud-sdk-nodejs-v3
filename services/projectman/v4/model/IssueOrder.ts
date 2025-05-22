

export class IssueOrder {
    public id?: number;
    public name?: string;
    public constructor() { 
    }
    public withId(id: number): IssueOrder {
        this['id'] = id;
        return this;
    }
    public withName(name: string): IssueOrder {
        this['name'] = name;
        return this;
    }
}