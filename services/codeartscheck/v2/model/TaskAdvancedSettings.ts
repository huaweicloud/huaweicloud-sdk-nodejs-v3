

export class TaskAdvancedSettings {
    public key?: string;
    public value?: string;
    private 'option_value'?: string;
    public description?: string;
    public constructor() { 
    }
    public withKey(key: string): TaskAdvancedSettings {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): TaskAdvancedSettings {
        this['value'] = value;
        return this;
    }
    public withOptionValue(optionValue: string): TaskAdvancedSettings {
        this['option_value'] = optionValue;
        return this;
    }
    public set optionValue(optionValue: string  | undefined) {
        this['option_value'] = optionValue;
    }
    public get optionValue(): string | undefined {
        return this['option_value'];
    }
    public withDescription(description: string): TaskAdvancedSettings {
        this['description'] = description;
        return this;
    }
}