

export class CheckConfigInfo {
    public name?: string;
    private 'cfg_key'?: string;
    private 'default_value'?: string;
    private 'option_value'?: string;
    private 'is_required'?: number;
    public description?: string;
    public type?: number;
    public status?: string;
    public value?: string;
    public constructor() { 
    }
    public withName(name: string): CheckConfigInfo {
        this['name'] = name;
        return this;
    }
    public withCfgKey(cfgKey: string): CheckConfigInfo {
        this['cfg_key'] = cfgKey;
        return this;
    }
    public set cfgKey(cfgKey: string  | undefined) {
        this['cfg_key'] = cfgKey;
    }
    public get cfgKey(): string | undefined {
        return this['cfg_key'];
    }
    public withDefaultValue(defaultValue: string): CheckConfigInfo {
        this['default_value'] = defaultValue;
        return this;
    }
    public set defaultValue(defaultValue: string  | undefined) {
        this['default_value'] = defaultValue;
    }
    public get defaultValue(): string | undefined {
        return this['default_value'];
    }
    public withOptionValue(optionValue: string): CheckConfigInfo {
        this['option_value'] = optionValue;
        return this;
    }
    public set optionValue(optionValue: string  | undefined) {
        this['option_value'] = optionValue;
    }
    public get optionValue(): string | undefined {
        return this['option_value'];
    }
    public withIsRequired(isRequired: number): CheckConfigInfo {
        this['is_required'] = isRequired;
        return this;
    }
    public set isRequired(isRequired: number  | undefined) {
        this['is_required'] = isRequired;
    }
    public get isRequired(): number | undefined {
        return this['is_required'];
    }
    public withDescription(description: string): CheckConfigInfo {
        this['description'] = description;
        return this;
    }
    public withType(type: number): CheckConfigInfo {
        this['type'] = type;
        return this;
    }
    public withStatus(status: string): CheckConfigInfo {
        this['status'] = status;
        return this;
    }
    public withValue(value: string): CheckConfigInfo {
        this['value'] = value;
        return this;
    }
}