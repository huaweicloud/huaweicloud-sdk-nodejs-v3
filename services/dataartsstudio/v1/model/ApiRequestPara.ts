

export class ApiRequestPara {
    public name?: string;
    public mapping?: string;
    public condition?: ApiRequestParaConditionEnum | string;
    public constructor() { 
    }
    public withName(name: string): ApiRequestPara {
        this['name'] = name;
        return this;
    }
    public withMapping(mapping: string): ApiRequestPara {
        this['mapping'] = mapping;
        return this;
    }
    public withCondition(condition: ApiRequestParaConditionEnum | string): ApiRequestPara {
        this['condition'] = condition;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApiRequestParaConditionEnum {
    CONDITION_TYPE_EQ = 'CONDITION_TYPE_EQ',
    CONDITION_TYPE_NE = 'CONDITION_TYPE_NE',
    CONDITION_TYPE_GT = 'CONDITION_TYPE_GT',
    CONDITION_TYPE_GE = 'CONDITION_TYPE_GE',
    CONDITION_TYPE_LT = 'CONDITION_TYPE_LT',
    CONDITION_TYPE_LE = 'CONDITION_TYPE_LE',
    CONDITION_TYPE_LIKE = 'CONDITION_TYPE_LIKE',
    CONDITION_TYPE_LIKE_L = 'CONDITION_TYPE_LIKE_L',
    CONDITION_TYPE_LIKE_R = 'CONDITION_TYPE_LIKE_R'
}
