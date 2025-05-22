

export class IssueDetailResponseV4Env {
    public id?: number;
    public name?: string;
    public constructor() { 
    }
    public withId(id: number): IssueDetailResponseV4Env {
        this['id'] = id;
        return this;
    }
    public withName(name: string): IssueDetailResponseV4Env {
        this['name'] = name;
        return this;
    }
}