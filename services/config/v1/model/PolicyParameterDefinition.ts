

export class PolicyParameterDefinition {
    public name?: string;
    public description?: string;
    private 'allowed_values'?: Array<object> | undefined;
    private 'default_value'?: string | undefined;
    public type?: PolicyParameterDefinitionTypeEnum;
    public constructor() { 
    }
    public withName(name: string): PolicyParameterDefinition {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): PolicyParameterDefinition {
        this['description'] = description;
        return this;
    }
    public withAllowedValues(allowedValues: Array<object>): PolicyParameterDefinition {
        this['allowed_values'] = allowedValues;
        return this;
    }
    public set allowedValues(allowedValues: Array<object> | undefined) {
        this['allowed_values'] = allowedValues;
    }
    public get allowedValues() {
        return this['allowed_values'];
    }
    public withDefaultValue(defaultValue: string): PolicyParameterDefinition {
        this['default_value'] = defaultValue;
        return this;
    }
    public set defaultValue(defaultValue: string | undefined) {
        this['default_value'] = defaultValue;
    }
    public get defaultValue() {
        return this['default_value'];
    }
    public withType(type: PolicyParameterDefinitionTypeEnum): PolicyParameterDefinition {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PolicyParameterDefinitionTypeEnum {
    ARRAY = 'Array',
    BOOLEAN = 'Boolean',
    INTEGER = 'Integer',
    FLOAT = 'Float',
    STRING = 'String',
    DATETIME = 'DateTime'
}
