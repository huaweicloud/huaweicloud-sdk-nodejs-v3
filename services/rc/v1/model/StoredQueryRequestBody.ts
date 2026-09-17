

export class StoredQueryRequestBody {
    public name?: string;
    public description?: string;
    public expression?: string;
    public constructor(name?: string, expression?: string) { 
        this['name'] = name;
        this['expression'] = expression;
    }
    public withName(name: string): StoredQueryRequestBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): StoredQueryRequestBody {
        this['description'] = description;
        return this;
    }
    public withExpression(expression: string): StoredQueryRequestBody {
        this['expression'] = expression;
        return this;
    }
}