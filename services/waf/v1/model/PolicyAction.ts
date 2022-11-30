

export class PolicyAction {
    public category?: PolicyActionCategoryEnum;
    public constructor() { 
    }
    public withCategory(category: PolicyActionCategoryEnum): PolicyAction {
        this['category'] = category;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PolicyActionCategoryEnum {
    BLOCK = 'block',
    LOG = 'log'
}
