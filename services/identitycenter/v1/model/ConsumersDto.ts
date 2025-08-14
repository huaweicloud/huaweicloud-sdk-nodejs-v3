

export class ConsumersDto {
    public binding?: string;
    private 'default_value'?: boolean;
    public location?: string;
    public constructor(binding?: string, defaultValue?: boolean, location?: string) { 
        this['binding'] = binding;
        this['default_value'] = defaultValue;
        this['location'] = location;
    }
    public withBinding(binding: string): ConsumersDto {
        this['binding'] = binding;
        return this;
    }
    public withDefaultValue(defaultValue: boolean): ConsumersDto {
        this['default_value'] = defaultValue;
        return this;
    }
    public set defaultValue(defaultValue: boolean  | undefined) {
        this['default_value'] = defaultValue;
    }
    public get defaultValue(): boolean | undefined {
        return this['default_value'];
    }
    public withLocation(location: string): ConsumersDto {
        this['location'] = location;
        return this;
    }
}