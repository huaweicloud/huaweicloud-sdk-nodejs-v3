

export class CreateIpReputationRuleRequestBodyAction {
    public category?: CreateIpReputationRuleRequestBodyActionCategoryEnum | string;
    public constructor(category?: string) { 
        this['category'] = category;
    }
    public withCategory(category: CreateIpReputationRuleRequestBodyActionCategoryEnum | string): CreateIpReputationRuleRequestBodyAction {
        this['category'] = category;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateIpReputationRuleRequestBodyActionCategoryEnum {
    LOG = 'log',
    PASS = 'pass',
    BLOCK = 'block'
}
