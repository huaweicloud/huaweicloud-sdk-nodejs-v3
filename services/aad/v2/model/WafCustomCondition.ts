

export class WafCustomCondition {
    public category?: string;
    public index?: string;
    private 'logic_operation'?: string;
    public contents?: Array<string>;
    public constructor(category?: string, logicOperation?: string, contents?: Array<string>) { 
        this['category'] = category;
        this['logic_operation'] = logicOperation;
        this['contents'] = contents;
    }
    public withCategory(category: string): WafCustomCondition {
        this['category'] = category;
        return this;
    }
    public withIndex(index: string): WafCustomCondition {
        this['index'] = index;
        return this;
    }
    public withLogicOperation(logicOperation: string): WafCustomCondition {
        this['logic_operation'] = logicOperation;
        return this;
    }
    public set logicOperation(logicOperation: string  | undefined) {
        this['logic_operation'] = logicOperation;
    }
    public get logicOperation(): string | undefined {
        return this['logic_operation'];
    }
    public withContents(contents: Array<string>): WafCustomCondition {
        this['contents'] = contents;
        return this;
    }
}