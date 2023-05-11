

export class Filter {
    public condition: FilterConditionEnum;
    private 'is_support_filter': boolean | undefined;
    public rule: Array<string>;
    public constructor(condition?: any, isSupportFilter?: any, rule?: any) { 
        this['condition'] = condition;
        this['is_support_filter'] = isSupportFilter;
        this['rule'] = rule;
    }
    public withCondition(condition: FilterConditionEnum): Filter {
        this['condition'] = condition;
        return this;
    }
    public withIsSupportFilter(isSupportFilter: boolean): Filter {
        this['is_support_filter'] = isSupportFilter;
        return this;
    }
    public set isSupportFilter(isSupportFilter: boolean | undefined) {
        this['is_support_filter'] = isSupportFilter;
    }
    public get isSupportFilter() {
        return this['is_support_filter'];
    }
    public withRule(rule: Array<string>): Filter {
        this['rule'] = rule;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum FilterConditionEnum {
    AND = 'AND',
    OR = 'OR'
}
