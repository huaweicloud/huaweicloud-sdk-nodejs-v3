

export class LeakageListInfoAction {
    public category?: LeakageListInfoActionCategoryEnum | string;
    public constructor(category?: string) { 
        this['category'] = category;
    }
    public withCategory(category: LeakageListInfoActionCategoryEnum | string): LeakageListInfoAction {
        this['category'] = category;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum LeakageListInfoActionCategoryEnum {
    BLOCK = 'block',
    LOG = 'log'
}
