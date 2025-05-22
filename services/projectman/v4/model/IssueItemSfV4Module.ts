

export class IssueItemSfV4Module {
    public id?: number;
    public name?: string;
    public constructor() { 
    }
    public withId(id: number): IssueItemSfV4Module {
        this['id'] = id;
        return this;
    }
    public withName(name: string): IssueItemSfV4Module {
        this['name'] = name;
        return this;
    }
}