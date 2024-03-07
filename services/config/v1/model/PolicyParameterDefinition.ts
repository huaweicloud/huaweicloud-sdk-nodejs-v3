

export class PolicyParameterDefinition {
    public name?: string;
    public description?: string;
    private 'allowed_values'?: Array<object>;
    private 'default_value'?: string;
    public minimum?: number;
    public maximum?: number;
    private 'min_items'?: number;
    private 'max_items'?: number;
    private 'min_length'?: number;
    private 'max_length'?: number;
    public pattern?: string;
    public type?: PolicyParameterDefinitionTypeEnum | string;
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
    public set allowedValues(allowedValues: Array<object>  | undefined) {
        this['allowed_values'] = allowedValues;
    }
    public get allowedValues(): Array<object> | undefined {
        return this['allowed_values'];
    }
    public withDefaultValue(defaultValue: string): PolicyParameterDefinition {
        this['default_value'] = defaultValue;
        return this;
    }
    public set defaultValue(defaultValue: string  | undefined) {
        this['default_value'] = defaultValue;
    }
    public get defaultValue(): string | undefined {
        return this['default_value'];
    }
    public withMinimum(minimum: number): PolicyParameterDefinition {
        this['minimum'] = minimum;
        return this;
    }
    public withMaximum(maximum: number): PolicyParameterDefinition {
        this['maximum'] = maximum;
        return this;
    }
    public withMinItems(minItems: number): PolicyParameterDefinition {
        this['min_items'] = minItems;
        return this;
    }
    public set minItems(minItems: number  | undefined) {
        this['min_items'] = minItems;
    }
    public get minItems(): number | undefined {
        return this['min_items'];
    }
    public withMaxItems(maxItems: number): PolicyParameterDefinition {
        this['max_items'] = maxItems;
        return this;
    }
    public set maxItems(maxItems: number  | undefined) {
        this['max_items'] = maxItems;
    }
    public get maxItems(): number | undefined {
        return this['max_items'];
    }
    public withMinLength(minLength: number): PolicyParameterDefinition {
        this['min_length'] = minLength;
        return this;
    }
    public set minLength(minLength: number  | undefined) {
        this['min_length'] = minLength;
    }
    public get minLength(): number | undefined {
        return this['min_length'];
    }
    public withMaxLength(maxLength: number): PolicyParameterDefinition {
        this['max_length'] = maxLength;
        return this;
    }
    public set maxLength(maxLength: number  | undefined) {
        this['max_length'] = maxLength;
    }
    public get maxLength(): number | undefined {
        return this['max_length'];
    }
    public withPattern(pattern: string): PolicyParameterDefinition {
        this['pattern'] = pattern;
        return this;
    }
    public withType(type: PolicyParameterDefinitionTypeEnum | string): PolicyParameterDefinition {
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
