

export class IssueItemSfV4Domain {
    public id?: number;
    public name?: string;
    public constructor() { 
    }
    public withId(id: number): IssueItemSfV4Domain {
        this['id'] = id;
        return this;
    }
    public withName(name: string): IssueItemSfV4Domain {
        this['name'] = name;
        return this;
    }
}