

export class IssueResponseV4Order {
    public id?: number;
    public name?: string;
    public constructor() { 
    }
    public withId(id: number): IssueResponseV4Order {
        this['id'] = id;
        return this;
    }
    public withName(name: string): IssueResponseV4Order {
        this['name'] = name;
        return this;
    }
}