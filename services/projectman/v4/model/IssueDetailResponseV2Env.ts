

export class IssueDetailResponseV2Env {
    public id?: number;
    public name?: string;
    public constructor() { 
    }
    public withId(id: number): IssueDetailResponseV2Env {
        this['id'] = id;
        return this;
    }
    public withName(name: string): IssueDetailResponseV2Env {
        this['name'] = name;
        return this;
    }
}