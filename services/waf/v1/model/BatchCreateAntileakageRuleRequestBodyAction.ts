

export class BatchCreateAntileakageRuleRequestBodyAction {
    public category?: BatchCreateAntileakageRuleRequestBodyActionCategoryEnum | string;
    public constructor(category?: string) { 
        this['category'] = category;
    }
    public withCategory(category: BatchCreateAntileakageRuleRequestBodyActionCategoryEnum | string): BatchCreateAntileakageRuleRequestBodyAction {
        this['category'] = category;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchCreateAntileakageRuleRequestBodyActionCategoryEnum {
    BLOCK = 'block',
    LOG = 'log'
}
