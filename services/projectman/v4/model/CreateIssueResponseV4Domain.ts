

export class CreateIssueResponseV4Domain {
    public id?: number;
    public name?: string;
    public constructor() { 
    }
    public withId(id: number): CreateIssueResponseV4Domain {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateIssueResponseV4Domain {
        this['name'] = name;
        return this;
    }
}