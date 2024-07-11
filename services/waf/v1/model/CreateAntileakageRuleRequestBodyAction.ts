

export class CreateAntileakageRuleRequestBodyAction {
    public category?: CreateAntileakageRuleRequestBodyActionCategoryEnum | string;
    public constructor(category?: string) { 
        this['category'] = category;
    }
    public withCategory(category: CreateAntileakageRuleRequestBodyActionCategoryEnum | string): CreateAntileakageRuleRequestBodyAction {
        this['category'] = category;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateAntileakageRuleRequestBodyActionCategoryEnum {
    BLOCK = 'block',
    LOG = 'log'
}
