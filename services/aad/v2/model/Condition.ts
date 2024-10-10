

export class Condition {
    public category?: string;
    public contents?: Array<string>;
    public index?: string;
    private 'logic_operation'?: string;
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
    public withIndex(index: string): Condition {
        this['index'] = index;
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
}