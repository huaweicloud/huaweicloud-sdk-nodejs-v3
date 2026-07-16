

export class AffinityRule {
    public key?: string;
    public operator?: string;
    public values?: Array<string>;
    public weight?: number;
    public constructor() { 
    }
    public withKey(key: string): AffinityRule {
        this['key'] = key;
        return this;
    }
    public withOperator(operator: string): AffinityRule {
        this['operator'] = operator;
        return this;
    }
    public withValues(values: Array<string>): AffinityRule {
        this['values'] = values;
        return this;
    }
    public withWeight(weight: number): AffinityRule {
        this['weight'] = weight;
        return this;
    }
}