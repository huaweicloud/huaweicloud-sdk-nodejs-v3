

export class MultiQueryConditionOption {
    public name?: string;
    public condition?: MultiQueryConditionOptionConditionEnum | string;
    private 'is_fuzzy'?: boolean;
    public values?: Array<string>;
    public constructor() { 
    }
    public withName(name: string): MultiQueryConditionOption {
        this['name'] = name;
        return this;
    }
    public withCondition(condition: MultiQueryConditionOptionConditionEnum | string): MultiQueryConditionOption {
        this['condition'] = condition;
        return this;
    }
    public withIsFuzzy(isFuzzy: boolean): MultiQueryConditionOption {
        this['is_fuzzy'] = isFuzzy;
        return this;
    }
    public set isFuzzy(isFuzzy: boolean  | undefined) {
        this['is_fuzzy'] = isFuzzy;
    }
    public get isFuzzy(): boolean | undefined {
        return this['is_fuzzy'];
    }
    public withValues(values: Array<string>): MultiQueryConditionOption {
        this['values'] = values;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MultiQueryConditionOptionConditionEnum {
    OR = 'OR',
    AND = 'AND'
}
