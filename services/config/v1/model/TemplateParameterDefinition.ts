

export class TemplateParameterDefinition {
    public name?: string;
    public description?: string;
    private 'default_value'?: object;
    private 'allowed_values'?: Array<object>;
    public minimum?: number;
    public maximum?: number;
    private 'min_items'?: number;
    private 'max_items'?: number;
    private 'min_length'?: number;
    private 'max_length'?: number;
    public pattern?: string;
    public type?: TemplateParameterDefinitionTypeEnum | string;
    public constructor() { 
    }
    public withName(name: string): TemplateParameterDefinition {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): TemplateParameterDefinition {
        this['description'] = description;
        return this;
    }
    public withDefaultValue(defaultValue: object): TemplateParameterDefinition {
        this['default_value'] = defaultValue;
        return this;
    }
    public set defaultValue(defaultValue: object  | undefined) {
        this['default_value'] = defaultValue;
    }
    public get defaultValue(): object | undefined {
        return this['default_value'];
    }
    public withAllowedValues(allowedValues: Array<object>): TemplateParameterDefinition {
        this['allowed_values'] = allowedValues;
        return this;
    }
    public set allowedValues(allowedValues: Array<object>  | undefined) {
        this['allowed_values'] = allowedValues;
    }
    public get allowedValues(): Array<object> | undefined {
        return this['allowed_values'];
    }
    public withMinimum(minimum: number): TemplateParameterDefinition {
        this['minimum'] = minimum;
        return this;
    }
    public withMaximum(maximum: number): TemplateParameterDefinition {
        this['maximum'] = maximum;
        return this;
    }
    public withMinItems(minItems: number): TemplateParameterDefinition {
        this['min_items'] = minItems;
        return this;
    }
    public set minItems(minItems: number  | undefined) {
        this['min_items'] = minItems;
    }
    public get minItems(): number | undefined {
        return this['min_items'];
    }
    public withMaxItems(maxItems: number): TemplateParameterDefinition {
        this['max_items'] = maxItems;
        return this;
    }
    public set maxItems(maxItems: number  | undefined) {
        this['max_items'] = maxItems;
    }
    public get maxItems(): number | undefined {
        return this['max_items'];
    }
    public withMinLength(minLength: number): TemplateParameterDefinition {
        this['min_length'] = minLength;
        return this;
    }
    public set minLength(minLength: number  | undefined) {
        this['min_length'] = minLength;
    }
    public get minLength(): number | undefined {
        return this['min_length'];
    }
    public withMaxLength(maxLength: number): TemplateParameterDefinition {
        this['max_length'] = maxLength;
        return this;
    }
    public set maxLength(maxLength: number  | undefined) {
        this['max_length'] = maxLength;
    }
    public get maxLength(): number | undefined {
        return this['max_length'];
    }
    public withPattern(pattern: string): TemplateParameterDefinition {
        this['pattern'] = pattern;
        return this;
    }
    public withType(type: TemplateParameterDefinitionTypeEnum | string): TemplateParameterDefinition {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TemplateParameterDefinitionTypeEnum {
    ARRAY = 'Array',
    BOOLEAN = 'Boolean',
    INTEGER = 'Integer',
    FLOAT = 'Float',
    STRING = 'String',
    OBJECT = 'Object',
    DATE = 'Date'
}
