

export class StoredQuery {
    public id?: string;
    public name?: string;
    public type?: StoredQueryTypeEnum | string;
    public description?: string;
    public expression?: string;
    public created?: string;
    public updated?: string;
    public constructor() { 
    }
    public withId(id: string): StoredQuery {
        this['id'] = id;
        return this;
    }
    public withName(name: string): StoredQuery {
        this['name'] = name;
        return this;
    }
    public withType(type: StoredQueryTypeEnum | string): StoredQuery {
        this['type'] = type;
        return this;
    }
    public withDescription(description: string): StoredQuery {
        this['description'] = description;
        return this;
    }
    public withExpression(expression: string): StoredQuery {
        this['expression'] = expression;
        return this;
    }
    public withCreated(created: string): StoredQuery {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): StoredQuery {
        this['updated'] = updated;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StoredQueryTypeEnum {
    ACCOUNT = 'account',
    AGGREGATOR = 'aggregator'
}
