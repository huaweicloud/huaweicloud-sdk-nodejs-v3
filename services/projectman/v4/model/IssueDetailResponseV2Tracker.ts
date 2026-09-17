

export class IssueDetailResponseV2Tracker {
    public id?: number;
    public name?: string;
    public constructor() { 
    }
    public withId(id: number): IssueDetailResponseV2Tracker {
        this['id'] = id;
        return this;
    }
    public withName(name: string): IssueDetailResponseV2Tracker {
        this['name'] = name;
        return this;
    }
}