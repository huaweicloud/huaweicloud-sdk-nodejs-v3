

export class SearchPolicyRequestBodyConditionConditions {
    public name?: string;
    public data?: Array<string>;
    public constructor() { 
    }
    public withName(name: string): SearchPolicyRequestBodyConditionConditions {
        this['name'] = name;
        return this;
    }
    public withData(data: Array<string>): SearchPolicyRequestBodyConditionConditions {
        this['data'] = data;
        return this;
    }
}