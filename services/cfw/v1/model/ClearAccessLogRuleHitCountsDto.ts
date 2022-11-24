

export class ClearAccessLogRuleHitCountsDto {
    private 'rule_ids': Array<string> | undefined;
    public constructor(ruleIds?: any) { 
        this['rule_ids'] = ruleIds;
    }
    public withRuleIds(ruleIds: Array<string>): ClearAccessLogRuleHitCountsDto {
        this['rule_ids'] = ruleIds;
        return this;
    }
    public set ruleIds(ruleIds: Array<string> | undefined) {
        this['rule_ids'] = ruleIds;
    }
    public get ruleIds() {
        return this['rule_ids'];
    }
}