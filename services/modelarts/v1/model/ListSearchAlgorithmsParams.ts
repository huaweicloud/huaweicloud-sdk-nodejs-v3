

export class ListSearchAlgorithmsParams {
    public key?: string;
    public value?: string;
    public type?: string;
    public constructor() { 
    }
    public withKey(key: string): ListSearchAlgorithmsParams {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): ListSearchAlgorithmsParams {
        this['value'] = value;
        return this;
    }
    public withType(type: string): ListSearchAlgorithmsParams {
        this['type'] = type;
        return this;
    }
}