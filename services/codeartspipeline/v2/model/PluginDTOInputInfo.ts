

export class PluginDTOInputInfo {
    public name?: string;
    private 'default_value'?: string;
    public type?: string;
    public validation?: string;
    private 'layout_content'?: string;
    public constructor() { 
    }
    public withName(name: string): PluginDTOInputInfo {
        this['name'] = name;
        return this;
    }
    public withDefaultValue(defaultValue: string): PluginDTOInputInfo {
        this['default_value'] = defaultValue;
        return this;
    }
    public set defaultValue(defaultValue: string  | undefined) {
        this['default_value'] = defaultValue;
    }
    public get defaultValue(): string | undefined {
        return this['default_value'];
    }
    public withType(type: string): PluginDTOInputInfo {
        this['type'] = type;
        return this;
    }
    public withValidation(validation: string): PluginDTOInputInfo {
        this['validation'] = validation;
        return this;
    }
    public withLayoutContent(layoutContent: string): PluginDTOInputInfo {
        this['layout_content'] = layoutContent;
        return this;
    }
    public set layoutContent(layoutContent: string  | undefined) {
        this['layout_content'] = layoutContent;
    }
    public get layoutContent(): string | undefined {
        return this['layout_content'];
    }
}