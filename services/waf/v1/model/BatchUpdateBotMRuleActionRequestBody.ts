

export class BatchUpdateBotMRuleActionRequestBody {
    private 'rule_ids'?: Array<string>;
    private 'defense_action'?: BatchUpdateBotMRuleActionRequestBodyDefenseActionEnum | number;
    public constructor() { 
    }
    public withRuleIds(ruleIds: Array<string>): BatchUpdateBotMRuleActionRequestBody {
        this['rule_ids'] = ruleIds;
        return this;
    }
    public set ruleIds(ruleIds: Array<string>  | undefined) {
        this['rule_ids'] = ruleIds;
    }
    public get ruleIds(): Array<string> | undefined {
        return this['rule_ids'];
    }
    public withDefenseAction(defenseAction: BatchUpdateBotMRuleActionRequestBodyDefenseActionEnum | number): BatchUpdateBotMRuleActionRequestBody {
        this['defense_action'] = defenseAction;
        return this;
    }
    public set defenseAction(defenseAction: BatchUpdateBotMRuleActionRequestBodyDefenseActionEnum | number  | undefined) {
        this['defense_action'] = defenseAction;
    }
    public get defenseAction(): BatchUpdateBotMRuleActionRequestBodyDefenseActionEnum | number | undefined {
        return this['defense_action'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchUpdateBotMRuleActionRequestBodyDefenseActionEnum {
    NUMBER_101 = 101,
    NUMBER_102 = 102,
    NUMBER_103 = 103,
    NUMBER_104 = 104,
    NUMBER_201 = 201,
    NUMBER_202 = 202,
    NUMBER_301 = 301
}
