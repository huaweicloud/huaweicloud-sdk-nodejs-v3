

export class DeleteRuleRequest {
    public ruleid?: string;
    public constructor(ruleid?: string) { 
        this['ruleid'] = ruleid;
    }
    public withRuleid(ruleid: string): DeleteRuleRequest {
        this['ruleid'] = ruleid;
        return this;
    }
}