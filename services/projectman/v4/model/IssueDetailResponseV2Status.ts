

export class IssueDetailResponseV2Status {
    public id?: number;
    public name?: string;
    public constructor() { 
    }
    public withId(id: number): IssueDetailResponseV2Status {
        this['id'] = id;
        return this;
    }
    public withName(name: string): IssueDetailResponseV2Status {
        this['name'] = name;
        return this;
    }
}