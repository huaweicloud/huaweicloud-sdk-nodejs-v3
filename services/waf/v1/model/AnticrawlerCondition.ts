

export class AnticrawlerCondition {
    public category?: AnticrawlerConditionCategoryEnum | string;
    private 'logic_operation'?: string;
    public contents?: Array<string>;
    private 'value_list_id'?: string;
    public constructor() { 
    }
    public withCategory(category: AnticrawlerConditionCategoryEnum | string): AnticrawlerCondition {
        this['category'] = category;
        return this;
    }
    public withLogicOperation(logicOperation: string): AnticrawlerCondition {
        this['logic_operation'] = logicOperation;
        return this;
    }
    public set logicOperation(logicOperation: string  | undefined) {
        this['logic_operation'] = logicOperation;
    }
    public get logicOperation(): string | undefined {
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
