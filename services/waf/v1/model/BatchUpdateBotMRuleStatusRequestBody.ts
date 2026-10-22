

export class BatchUpdateBotMRuleStatusRequestBody {
    private 'rule_ids'?: Array<number>;
    public enable?: boolean;
    public constructor() { 
    }
    public withRuleIds(ruleIds: Array<number>): BatchUpdateBotMRuleStatusRequestBody {
        this['rule_ids'] = ruleIds;
        return this;
    }
    public set ruleIds(ruleIds: Array<number>  | undefined) {
        this['rule_ids'] = ruleIds;
    }
    public get ruleIds(): Array<number> | undefined {
        return this['rule_ids'];
    }
    public withEnable(enable: boolean): BatchUpdateBotMRuleStatusRequestBody {
        this['enable'] = enable;
        return this;
    }
}