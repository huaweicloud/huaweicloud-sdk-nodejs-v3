

export class BaselineSearchRequestBodyConditionConditions {
    public name?: string;
    public data?: Array<string>;
    public constructor() { 
    }
    public withName(name: string): BaselineSearchRequestBodyConditionConditions {
        this['name'] = name;
        return this;
    }
    public withData(data: Array<string>): BaselineSearchRequestBodyConditionConditions {
        this['data'] = data;
        return this;
    }
}