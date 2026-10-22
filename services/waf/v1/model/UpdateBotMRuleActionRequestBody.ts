

export class UpdateBotMRuleActionRequestBody {
    private 'defense_action'?: UpdateBotMRuleActionRequestBodyDefenseActionEnum | number;
    public constructor() { 
    }
    public withDefenseAction(defenseAction: UpdateBotMRuleActionRequestBodyDefenseActionEnum | number): UpdateBotMRuleActionRequestBody {
        this['defense_action'] = defenseAction;
        return this;
    }
    public set defenseAction(defenseAction: UpdateBotMRuleActionRequestBodyDefenseActionEnum | number  | undefined) {
        this['defense_action'] = defenseAction;
    }
    public get defenseAction(): UpdateBotMRuleActionRequestBodyDefenseActionEnum | number | undefined {
        return this['defense_action'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateBotMRuleActionRequestBodyDefenseActionEnum {
    NUMBER_101 = 101,
    NUMBER_102 = 102,
    NUMBER_103 = 103,
    NUMBER_104 = 104,
    NUMBER_201 = 201,
    NUMBER_202 = 202,
    NUMBER_301 = 301
}
