

export class CustomRuleConditions {
    public category?: string;
    public index?: string;
    private 'logic_operation'?: string | undefined;
    public contents?: Array<string>;
    private 'value_list_id'?: string | undefined;
    public constructor() { 
    }
    public withCategory(category: string): CustomRuleConditions {
        this['category'] = category;
        return this;
    }
    public withIndex(index: string): CustomRuleConditions {
        this['index'] = index;
        return this;
    }
    public withLogicOperation(logicOperation: string): CustomRuleConditions {
        this['logic_operation'] = logicOperation;
        return this;
    }
    public set logicOperation(logicOperation: string | undefined) {
        this['logic_operation'] = logicOperation;
    }
    public get logicOperation() {
        return this['logic_operation'];
    }
    public withContents(contents: Array<string>): CustomRuleConditions {
        this['contents'] = contents;
        return this;
    }
    public withValueListId(valueListId: string): CustomRuleConditions {
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