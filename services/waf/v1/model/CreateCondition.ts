

export class CreateCondition {
    public category?: CreateConditionCategoryEnum | string;
    public index?: string;
    private 'logic_operation'?: CreateConditionLogicOperationEnum | string;
    public contents?: Array<string>;
    private 'check_all_indexes_logic'?: number;
    private 'value_list_id'?: string;
    public constructor(category?: string, logicOperation?: string) { 
        this['category'] = category;
        this['logic_operation'] = logicOperation;
    }
    public withCategory(category: CreateConditionCategoryEnum | string): CreateCondition {
        this['category'] = category;
        return this;
    }
    public withIndex(index: string): CreateCondition {
        this['index'] = index;
        return this;
    }
    public withLogicOperation(logicOperation: CreateConditionLogicOperationEnum | string): CreateCondition {
        this['logic_operation'] = logicOperation;
        return this;
    }
    public set logicOperation(logicOperation: CreateConditionLogicOperationEnum | string  | undefined) {
        this['logic_operation'] = logicOperation;
    }
    public get logicOperation(): CreateConditionLogicOperationEnum | string | undefined {
        return this['logic_operation'];
    }
    public withContents(contents: Array<string>): CreateCondition {
        this['contents'] = contents;
        return this;
    }
    public withCheckAllIndexesLogic(checkAllIndexesLogic: number): CreateCondition {
        this['check_all_indexes_logic'] = checkAllIndexesLogic;
        return this;
    }
    public set checkAllIndexesLogic(checkAllIndexesLogic: number  | undefined) {
        this['check_all_indexes_logic'] = checkAllIndexesLogic;
    }
    public get checkAllIndexesLogic(): number | undefined {
        return this['check_all_indexes_logic'];
    }
    public withValueListId(valueListId: string): CreateCondition {
        this['value_list_id'] = valueListId;
        return this;
    }
    public set valueListId(valueListId: string  | undefined) {
        this['value_list_id'] = valueListId;
    }
    public get valueListId(): string | undefined {
        return this['value_list_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateConditionCategoryEnum {
    URL = 'url',
    CUSTOM_GEO = 'custom_geo',
    ROBOT = 'robot',
    USER_AGENT = 'user-agent',
    IP = 'ip',
    IPV6 = 'ipv6',
    PARAMS = 'params',
    COOKIE = 'cookie',
    REFERER = 'referer',
    HEADER = 'header',
    METHOD = 'method',
    REQUEST_LINE = 'request_line',
    REQUEST = 'request',
    PROTOCOL = 'protocol',
    REQUEST_BODY = 'request_body'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateConditionLogicOperationEnum {
    LEN_EQUAL = 'len_equal',
    LEN_NOT_EQUAL = 'len_not_equal',
    LEN_GREATER = 'len_greater',
    LEN_LESS = 'len_less',
    LEN_GREATER_EQUAL = 'len_greater_equal',
    LEN_LESS_EQUAL = 'len_less_equal',
    REGULAR_MATCH = 'regular_match',
    REGULAR_NOT_MATCH = 'regular_not_match',
    MATCH = 'match',
    NOT_MATCH = 'not_match',
    NUM_EQUAL = 'num_equal',
    NUM_NOT_EQUAL = 'num_not_equal',
    NUM_GREATER = 'num_greater',
    NUM_LESS = 'num_less',
    EXIST = 'exist',
    NOT_EXIST = 'not_exist',
    EQUAL = 'equal',
    NOT_EQUAL = 'not_equal',
    EQUAL_ANY = 'equal_any',
    NOT_EQUAL_ALL = 'not_equal_all',
    PREFIX = 'prefix',
    PREFIX_ANY = 'prefix_any',
    NOT_PREFIX = 'not_prefix',
    NOT_PREFIX_ALL = 'not_prefix_all',
    SUFFIX = 'suffix',
    SUFFIX_ANY = 'suffix_any',
    NOT_SUFFIX = 'not_suffix',
    NOT_SUFFIX_ALL = 'not_suffix_all',
    CONTAIN = 'contain',
    CONTAIN_ANY = 'contain_any',
    NOT_CONTAIN = 'not_contain',
    NOT_CONTAIN_ALL = 'not_contain_all'
}
