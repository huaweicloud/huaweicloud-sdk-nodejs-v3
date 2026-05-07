

export class ResumePauseCustomRuleIdsRequestInfo {
    public enable?: number;
    private 'rule_id_list'?: Array<string>;
    public constructor(enable?: number, ruleIdList?: Array<string>) { 
        this['enable'] = enable;
        this['rule_id_list'] = ruleIdList;
    }
    public withEnable(enable: number): ResumePauseCustomRuleIdsRequestInfo {
        this['enable'] = enable;
        return this;
    }
    public withRuleIdList(ruleIdList: Array<string>): ResumePauseCustomRuleIdsRequestInfo {
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