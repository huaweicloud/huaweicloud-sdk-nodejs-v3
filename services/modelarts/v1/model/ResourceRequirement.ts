

export class ResourceRequirement {
    public key?: string;
    public values?: Array<string>;
    public operator?: string;
    public constructor() { 
    }
    public withKey(key: string): ResourceRequirement {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<string>): ResourceRequirement {
        this['values'] = values;
        return this;
    }
    public withOperator(operator: string): ResourceRequirement {
        this['operator'] = operator;
        return this;
    }
}