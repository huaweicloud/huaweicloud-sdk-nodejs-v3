

export class AnticrawlerCondition {
    public category?: AnticrawlerConditionCategoryEnum | string;
    private 'logic_operation'?: AnticrawlerConditionLogicOperationEnum | string;
    public contents?: Array<string>;
    private 'value_list_id'?: string;
    public constructor(category?: string, logicOperation?: string) { 
        this['category'] = category;
        this['logic_operation'] = logicOperation;
    }
    public withCategory(category: AnticrawlerConditionCategoryEnum | string): AnticrawlerCondition {
        this['category'] = category;
        return this;
    }
    public withLogicOperation(logicOperation: AnticrawlerConditionLogicOperationEnum | string): AnticrawlerCondition {
        this['logic_operation'] = logicOperation;
        return this;
    }
    public set logicOperation(logicOperation: AnticrawlerConditionLogicOperationEnum | string  | undefined) {
        this['logic_operation'] = logicOperation;
    }
    public get logicOperation(): AnticrawlerConditionLogicOperationEnum | string | undefined {
        return this['logic_operation'];
    }
    public withContents(contents: Array<string>): AnticrawlerCondition {
        this['contents'] = contents;
        return this;
    }
    public withValueListId(valueListId: string): AnticrawlerCondition {
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
export enum AnticrawlerConditionCategoryEnum {
    URL = 'url',
    USER_AGENT = 'user-agent'
}
/**
    * @export
    * @enum {string}
    */
export enum AnticrawlerConditionLogicOperationEnum {
    CONTAIN_ANY = 'contain_any',
    NOT_CONTAIN_ALL = 'not_contain_all',
    EQUAL_ANY = 'equal_any',
    NOT_EQUAL_ALL = 'not_equal_all',
    PREFIX_ANY = 'prefix_any',
    NOT_PREFIX_ALL = 'not_prefix_all',
    SUFFIX_ANY = 'suffix_any',
    NOT_SUFFIX_ALL = 'not_suffix_all',
    CONTAIN = 'contain',
    NOT_CONTAIN = 'not_contain',
    EQUAL = 'equal',
    NOT_EQUAL = 'not_equal',
    PREFIX = 'prefix',
    NOT_PREFIX = 'not_prefix',
    SUFFIX = 'suffix',
    NOT_SUFFIX = 'not_suffix',
    LEN_EQUAL = 'len_equal',
    LEN_NOT_EQUAL = 'len_not_equal',
    LEN_GREATER = 'len_greater',
    LEN_LESS = 'len_less',
    LEN_GREATER_EQUAL = 'len_greater_equal',
    LEN_LESS_EQUAL = 'len_less_equal',
    REGULAR_MATCH = 'regular_match',
    REGULAR_NOT_MATCH = 'regular_not_match'
}
