

export class PolicyAction {
    public category?: PolicyActionCategoryEnum | string;
    public constructor() { 
    }
    public withCategory(category: PolicyActionCategoryEnum | string): PolicyAction {
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
