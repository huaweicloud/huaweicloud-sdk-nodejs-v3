

export class UserPropDTO {
    private 'prop_key'?: string;
    private 'prop_value'?: string;
    public constructor() { 
    }
    public withPropKey(propKey: string): UserPropDTO {
        this['prop_key'] = propKey;
        return this;
    }
    public set propKey(propKey: string  | undefined) {
        this['prop_key'] = propKey;
    }
    public get propKey(): string | undefined {
        return this['prop_key'];
    }
    public withPropValue(propValue: string): UserPropDTO {
        this['prop_value'] = propValue;
        return this;
    }
    public set propValue(propValue: string  | undefined) {
        this['prop_value'] = propValue;
    }
    public get propValue(): string | undefined {
        return this['prop_value'];
    }
}