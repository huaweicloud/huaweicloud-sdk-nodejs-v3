

export class CustomConditions {
    public category?: CustomConditionsCategoryEnum;
    public index?: string;
    private 'logic_operation'?: string | undefined;
    public contents?: Array<string>;
    private 'value_list_id'?: string | undefined;
    public constructor() { 
    }
    public withCategory(category: CustomConditionsCategoryEnum): CustomConditions {
        this['category'] = category;
        return this;
    }
    public withIndex(index: string): CustomConditions {
        this['index'] = index;
        return this;
    }
    public withLogicOperation(logicOperation: string): CustomConditions {
        this['logic_operation'] = logicOperation;
        return this;
    }
    public set logicOperation(logicOperation: string | undefined) {
        this['logic_operation'] = logicOperation;
    }
    public get logicOperation() {
        return this['logic_operation'];
    }
    public withContents(contents: Array<string>): CustomConditions {
        this['contents'] = contents;
        return this;
    }
    public withValueListId(valueListId: string): CustomConditions {
        this['value_list_id'] = valueListId;
        return this;
    }
    public set valueListId(valueListId: string | undefined) {
        this['value_list_id'] = valueListId;
    }
    public get valueListId() {
        return this['value_list_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CustomConditionsCategoryEnum {
    URL = 'url',
    USER_AGENT = 'user-agent',
    REFERER = 'referer',
    IP = 'ip',
    METHOD = 'method',
    REQUEST_LINE = 'request_line',
    REQUEST = 'request',
    PARAMS = 'params',
    COOKIE = 'cookie',
    HEADER = 'header'
}
