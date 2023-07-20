

export class ClearAccessLogRuleHitCountsDto {
    private 'rule_ids'?: Array<string>;
    public constructor(ruleIds?: Array<string>) { 
        this['rule_ids'] = ruleIds;
    }
    public withRuleIds(ruleIds: Array<string>): ClearAccessLogRuleHitCountsDto {
        this['rule_ids'] = ruleIds;
        return this;
    }
    public set ruleIds(ruleIds: Array<string>  | undefined) {
        this['rule_ids'] = ruleIds;
    }
    public get ruleIds(): Array<string> | undefined {
        return this['rule_ids'];
    }
}