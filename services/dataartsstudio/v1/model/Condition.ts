

export class Condition {
    private 'pre_node_name'?: string;
    public expression?: string;
    public constructor() { 
    }
    public withPreNodeName(preNodeName: string): Condition {
        this['pre_node_name'] = preNodeName;
        return this;
    }
    public set preNodeName(preNodeName: string  | undefined) {
        this['pre_node_name'] = preNodeName;
    }
    public get preNodeName(): string | undefined {
        return this['pre_node_name'];
    }
    public withExpression(expression: string): Condition {
        this['expression'] = expression;
        return this;
    }
}