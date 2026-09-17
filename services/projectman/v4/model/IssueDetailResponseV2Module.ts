

export class IssueDetailResponseV2Module {
    public id?: number;
    public name?: string;
    public constructor() { 
    }
    public withId(id: number): IssueDetailResponseV2Module {
        this['id'] = id;
        return this;
    }
    public withName(name: string): IssueDetailResponseV2Module {
        this['name'] = name;
        return this;
    }
}