

export class AiGuardRuleAction {
    public category?: AiGuardRuleActionCategoryEnum | string;
    public constructor() { 
    }
    public withCategory(category: AiGuardRuleActionCategoryEnum | string): AiGuardRuleAction {
        this['category'] = category;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AiGuardRuleActionCategoryEnum {
    LOG = 'log',
    BLOCK = 'block',
    DESENSITIZE = 'desensitize'
}
