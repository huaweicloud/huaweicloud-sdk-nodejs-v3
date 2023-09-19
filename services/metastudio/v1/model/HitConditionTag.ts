

export class HitConditionTag {
    public tag?: string;
    public operation?: HitConditionTagOperationEnum | string;
    public match?: HitConditionTagMatchEnum | string;
    public value?: string;
    public constructor() { 
    }
    public withTag(tag: string): HitConditionTag {
        this['tag'] = tag;
        return this;
    }
    public withOperation(operation: HitConditionTagOperationEnum | string): HitConditionTag {
        this['operation'] = operation;
        return this;
    }
    public withMatch(match: HitConditionTagMatchEnum | string): HitConditionTag {
        this['match'] = match;
        return this;
    }
    public withValue(value: string): HitConditionTag {
        this['value'] = value;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum HitConditionTagOperationEnum {
    SUM = 'SUM',
    AVG = 'AVG',
    COUNT = 'COUNT',
    NONE = 'NONE'
}
/**
    * @export
    * @enum {string}
    */
export enum HitConditionTagMatchEnum {
    EQUAL = 'EQUAL',
    REGEX = 'REGEX',
    MATH_GT = 'MATH_GT',
    MATH_GE = 'MATH_GE',
    MATH_LT = 'MATH_LT',
    MATH_LE = 'MATH_LE',
    MATH_EQ = 'MATH_EQ'
}
