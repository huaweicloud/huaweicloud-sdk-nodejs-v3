

export class FirewallRemoveRuleItemOption {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): FirewallRemoveRuleItemOption {
        this['id'] = id;
        return this;
    }
}