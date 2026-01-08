

export class CreateCondition {
    public category?: string;
    public contents?: Array<string>;
    private 'logic_operation'?: string;
    private 'check_all_indexes_logic'?: number;
    public index?: string;
    private 'value_list_id'?: string;
    public constructor(category?: string, contents?: Array<string>, logicOperation?: string) { 
        this['category'] = category;
        this['contents'] = contents;
        this['logic_operation'] = logicOperation;
    }
    public withCategory(category: string): CreateCondition {
        this['category'] = category;
        return this;
    }
    public withContents(contents: Array<string>): CreateCondition {
        this['contents'] = contents;
        return this;
    }
    public withLogicOperation(logicOperation: string): CreateCondition {
        this['logic_operation'] = logicOperation;
        return this;
    }
    public set logicOperation(logicOperation: string  | undefined) {
        this['logic_operation'] = logicOperation;
    }
    public get logicOperation(): string | undefined {
        return this['logic_operation'];
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
    public withIndex(index: string): CreateCondition {
        this['index'] = index;
        return this;
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