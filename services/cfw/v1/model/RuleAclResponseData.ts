

export class RuleAclResponseData {
    public id?: string;
    public constructor() { 
    }
    public withId(id: string): RuleAclResponseData {
        this['id'] = id;
        return this;
    }
}