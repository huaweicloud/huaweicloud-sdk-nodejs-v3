

export class CcCondition {
    public category: CcConditionCategoryEnum;
    private 'logic_operation': string | undefined;
    public contents?: Array<string>;
    private 'value_list_id'?: string | undefined;
    public index?: string;
    public constructor(category?: any, logicOperation?: any) { 
        this['category'] = category;
        this['logic_operation'] = logicOperation;
    }
    public withCategory(category: CcConditionCategoryEnum): CcCondition {
        this['category'] = category;
        return this;
    }
    public withLogicOperation(logicOperation: string): CcCondition {
        this['logic_operation'] = logicOperation;
        return this;
    }
    public set logicOperation(logicOperation: string | undefined) {
        this['logic_operation'] = logicOperation;
    }
    public get logicOperation() {
        return this['logic_operation'];
    }
    public withContents(contents: Array<string>): CcCondition {
        this['contents'] = contents;
        return this;
    }
    public withValueListId(valueListId: string): CcCondition {
        this['value_list_id'] = valueListId;
        return this;
    }
    public set valueListId(valueListId: string | undefined) {
        this['value_list_id'] = valueListId;
    }
    public get valueListId() {
        return this['value_list_id'];
    }
    public withIndex(index: string): CcCondition {
        this['index'] = index;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CcConditionCategoryEnum {
    URL = 'url',
    IP = 'ip',
    IPV6 = 'ipv6',
    PARAMS = 'params',
    COOKIE = 'cookie',
    HEADER = 'header',
    RESPONSE_CODE = 'response_code'
}
