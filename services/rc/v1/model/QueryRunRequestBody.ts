

export class QueryRunRequestBody {
    public expression?: string;
    public constructor(expression?: string) { 
        this['expression'] = expression;
    }
    public withExpression(expression: string): QueryRunRequestBody {
        this['expression'] = expression;
        return this;
    }
}