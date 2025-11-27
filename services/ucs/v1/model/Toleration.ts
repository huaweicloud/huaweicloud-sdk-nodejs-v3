

export class Toleration {
    public key?: string;
    public operator?: string;
    public value?: string;
    public effect?: string;
    public tolerationSeconds?: number;
    public constructor() { 
    }
    public withKey(key: string): Toleration {
        this['key'] = key;
        return this;
    }
    public withOperator(operator: string): Toleration {
        this['operator'] = operator;
        return this;
    }
    public withValue(value: string): Toleration {
        this['value'] = value;
        return this;
    }
    public withEffect(effect: string): Toleration {
        this['effect'] = effect;
        return this;
    }
    public withTolerationSeconds(tolerationSeconds: number): Toleration {
        this['tolerationSeconds'] = tolerationSeconds;
        return this;
    }
}