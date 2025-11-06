

export class IpReputationRulesListInfoAction {
    public category?: IpReputationRulesListInfoActionCategoryEnum | string;
    public constructor(category?: string) { 
        this['category'] = category;
    }
    public withCategory(category: IpReputationRulesListInfoActionCategoryEnum | string): IpReputationRulesListInfoAction {
        this['category'] = category;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum IpReputationRulesListInfoActionCategoryEnum {
    PASS = 'pass',
    BLOCK = 'block',
    LOG = 'log'
}
