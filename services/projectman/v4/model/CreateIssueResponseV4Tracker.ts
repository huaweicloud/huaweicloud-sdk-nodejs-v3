

export class CreateIssueResponseV4Tracker {
    public id?: number;
    public name?: string;
    public constructor() { 
    }
    public withId(id: number): CreateIssueResponseV4Tracker {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateIssueResponseV4Tracker {
        this['name'] = name;
        return this;
    }
}