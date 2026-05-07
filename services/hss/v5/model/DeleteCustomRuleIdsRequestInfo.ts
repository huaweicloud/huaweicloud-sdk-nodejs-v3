

export class DeleteCustomRuleIdsRequestInfo {
    private 'rule_id_list'?: Array<string>;
    public constructor(ruleIdList?: Array<string>) { 
        this['rule_id_list'] = ruleIdList;
    }
    public withRuleIdList(ruleIdList: Array<string>): DeleteCustomRuleIdsRequestInfo {
        this['rule_id_list'] = ruleIdList;
        return this;
    }
    public set ruleIdList(ruleIdList: Array<string>  | undefined) {
        this['rule_id_list'] = ruleIdList;
    }
    public get ruleIdList(): Array<string> | undefined {
        return this['rule_id_list'];
    }
}