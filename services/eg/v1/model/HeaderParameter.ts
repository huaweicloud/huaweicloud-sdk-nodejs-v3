

export class HeaderParameter {
    private 'is_value_secret'?: boolean;
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withIsValueSecret(isValueSecret: boolean): HeaderParameter {
        this['is_value_secret'] = isValueSecret;
        return this;
    }
    public set isValueSecret(isValueSecret: boolean  | undefined) {
        this['is_value_secret'] = isValueSecret;
    }
    public get isValueSecret(): boolean | undefined {
        return this['is_value_secret'];
    }
    public withKey(key: string): HeaderParameter {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): HeaderParameter {
        this['value'] = value;
        return this;
    }
}