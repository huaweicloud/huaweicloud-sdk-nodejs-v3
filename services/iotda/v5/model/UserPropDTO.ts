

export class UserPropDTO {
    private 'prop_key'?: string | undefined;
    private 'prop_value'?: string | undefined;
    public constructor() { 
    }
    public withPropKey(propKey: string): UserPropDTO {
        this['prop_key'] = propKey;
        return this;
    }
    public set propKey(propKey: string | undefined) {
        this['prop_key'] = propKey;
    }
    public get propKey() {
        return this['prop_key'];
    }
    public withPropValue(propValue: string): UserPropDTO {
        this['prop_value'] = propValue;
        return this;
    }
    public set propValue(propValue: string | undefined) {
        this['prop_value'] = propValue;
    }
    public get propValue() {
        return this['prop_value'];
    }
}