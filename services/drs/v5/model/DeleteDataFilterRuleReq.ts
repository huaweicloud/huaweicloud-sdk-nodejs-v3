

export class DeleteDataFilterRuleReq {
    private 'rule_ids'?: Array<number>;
    public type?: DeleteDataFilterRuleReqTypeEnum | string;
    public constructor(ruleIds?: Array<number>, type?: string) { 
        this['rule_ids'] = ruleIds;
        this['type'] = type;
    }
    public withRuleIds(ruleIds: Array<number>): DeleteDataFilterRuleReq {
        this['rule_ids'] = ruleIds;
        return this;
    }
    public set ruleIds(ruleIds: Array<number>  | undefined) {
        this['rule_ids'] = ruleIds;
    }
    public get ruleIds(): Array<number> | undefined {
        return this['rule_ids'];
    }
    public withType(type: DeleteDataFilterRuleReqTypeEnum | string): DeleteDataFilterRuleReq {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteDataFilterRuleReqTypeEnum {
    COMMON = 'common',
    CONFIG = 'config'
}
