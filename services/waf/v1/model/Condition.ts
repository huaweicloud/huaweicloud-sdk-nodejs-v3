

export class Condition {
    public category?: string;
    public contents?: Array<string>;
    private 'logic_operation'?: string;
    private 'check_all_indexes_logic'?: number;
    public index?: string;
    public constructor() { 
    }
    public withCategory(category: string): Condition {
        this['category'] = category;
        return this;
    }
    public withContents(contents: Array<string>): Condition {
        this['contents'] = contents;
        return this;
    }
    public withLogicOperation(logicOperation: string): Condition {
        this['logic_operation'] = logicOperation;
        return this;
    }
    public set logicOperation(logicOperation: string  | undefined) {
        this['logic_operation'] = logicOperation;
    }
    public get logicOperation(): string | undefined {
        return this['logic_operation'];
    }
    public withCheckAllIndexesLogic(checkAllIndexesLogic: number): Condition {
        this['check_all_indexes_logic'] = checkAllIndexesLogic;
        return this;
    }
    public set checkAllIndexesLogic(checkAllIndexesLogic: number  | undefined) {
        this['check_all_indexes_logic'] = checkAllIndexesLogic;
    }
    public get checkAllIndexesLogic(): number | undefined {
        return this['check_all_indexes_logic'];
    }
    public withIndex(index: string): Condition {
        this['index'] = index;
        return this;
    }
}