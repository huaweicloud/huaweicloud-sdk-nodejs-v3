

export class DataobjectSearchConditionConditions {
    public name?: string;
    public data?: Array<string>;
    public constructor() { 
    }
    public withName(name: string): DataobjectSearchConditionConditions {
        this['name'] = name;
        return this;
    }
    public withData(data: Array<string>): DataobjectSearchConditionConditions {
        this['data'] = data;
        return this;
    }
}