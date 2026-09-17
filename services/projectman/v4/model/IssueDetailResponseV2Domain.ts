

export class IssueDetailResponseV2Domain {
    public id?: number;
    public name?: string;
    public constructor() { 
    }
    public withId(id: number): IssueDetailResponseV2Domain {
        this['id'] = id;
        return this;
    }
    public withName(name: string): IssueDetailResponseV2Domain {
        this['name'] = name;
        return this;
    }
}