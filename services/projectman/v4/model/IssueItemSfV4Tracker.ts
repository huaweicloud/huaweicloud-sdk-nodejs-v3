

export class IssueItemSfV4Tracker {
    public id?: number;
    public name?: string;
    public constructor() { 
    }
    public withId(id: number): IssueItemSfV4Tracker {
        this['id'] = id;
        return this;
    }
    public withName(name: string): IssueItemSfV4Tracker {
        this['name'] = name;
        return this;
    }
}