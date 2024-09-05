

export class StoredQueryRequestBody {
    public name?: string;
    public type?: StoredQueryRequestBodyTypeEnum | string;
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
    public withType(type: StoredQueryRequestBodyTypeEnum | string): StoredQueryRequestBody {
        this['type'] = type;
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

/**
    * @export
    * @enum {string}
    */
export enum StoredQueryRequestBodyTypeEnum {
    ACCOUNT = 'account',
    AGGREGATOR = 'aggregator'
}
