

export class ListScenesRespParams {
    public name?: string;
    public type?: string;
    private 'default_value'?: string;
    public constructor() { 
    }
    public withName(name: string): ListScenesRespParams {
        this['name'] = name;
        return this;
    }
    public withType(type: string): ListScenesRespParams {
        this['type'] = type;
        return this;
    }
    public withDefaultValue(defaultValue: string): ListScenesRespParams {
        this['default_value'] = defaultValue;
        return this;
    }
    public set defaultValue(defaultValue: string  | undefined) {
        this['default_value'] = defaultValue;
    }
    public get defaultValue(): string | undefined {
        return this['default_value'];
    }
}