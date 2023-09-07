

export class DataFilteringCondition {
    public value?: string;
    private 'filtering_type'?: DataFilteringConditionFilteringTypeEnum | string;
    public constructor() { 
    }
    public withValue(value: string): DataFilteringCondition {
        this['value'] = value;
        return this;
    }
    public withFilteringType(filteringType: DataFilteringConditionFilteringTypeEnum | string): DataFilteringCondition {
        this['filtering_type'] = filteringType;
        return this;
    }
    public set filteringType(filteringType: DataFilteringConditionFilteringTypeEnum | string  | undefined) {
        this['filtering_type'] = filteringType;
    }
    public get filteringType(): DataFilteringConditionFilteringTypeEnum | string | undefined {
        return this['filtering_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DataFilteringConditionFilteringTypeEnum {
    CONTENTCONDITIONALFILTER = 'contentConditionalFilter',
    CONFIGCONDITIONALFILTER = ' configConditionalFilter'
}
