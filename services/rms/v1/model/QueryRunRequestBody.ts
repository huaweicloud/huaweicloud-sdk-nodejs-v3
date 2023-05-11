

export class QueryRunRequestBody {
    public expression: string;
    public constructor(expression?: any) { 
        this['expression'] = expression;
    }
    public withExpression(expression: string): QueryRunRequestBody {
        this['expression'] = expression;
        return this;
    }
}