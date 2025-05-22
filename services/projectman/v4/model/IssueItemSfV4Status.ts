

export class IssueItemSfV4Status {
    public id?: number;
    public name?: string;
    public constructor() { 
    }
    public withId(id: number): IssueItemSfV4Status {
        this['id'] = id;
        return this;
    }
    public withName(name: string): IssueItemSfV4Status {
        this['name'] = name;
        return this;
    }
}