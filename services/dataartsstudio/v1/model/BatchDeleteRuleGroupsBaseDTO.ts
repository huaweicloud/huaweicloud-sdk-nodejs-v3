

export class BatchDeleteRuleGroupsBaseDTO {
    private 'rule_group_ids'?: Array<string>;
    public constructor(ruleGroupIds?: Array<string>) { 
        this['rule_group_ids'] = ruleGroupIds;
    }
    public withRuleGroupIds(ruleGroupIds: Array<string>): BatchDeleteRuleGroupsBaseDTO {
        this['rule_group_ids'] = ruleGroupIds;
        return this;
    }
    public set ruleGroupIds(ruleGroupIds: Array<string>  | undefined) {
        this['rule_group_ids'] = ruleGroupIds;
    }
    public get ruleGroupIds(): Array<string> | undefined {
        return this['rule_group_ids'];
    }
}