import { TaskParam } from './TaskParam';


export class Parameter {
    private 'param_name'?: string;
    private 'param_type'?: string;
    private 'param_group'?: string;
    private 'default_value'?: string;
    public id?: string;
    public encryption?: boolean;
    public hint?: string;
    private 'quote_param'?: boolean;
    public required?: boolean;
    public description?: string;
    public constructor(paramName?: string, encryption?: boolean, quoteParam?: boolean, required?: boolean) { 
        this['param_name'] = paramName;
        this['encryption'] = encryption;
        this['quote_param'] = quoteParam;
        this['required'] = required;
    }
    public withParamName(paramName: string): Parameter {
        this['param_name'] = paramName;
        return this;
    }
    public set paramName(paramName: string  | undefined) {
        this['param_name'] = paramName;
    }
    public get paramName(): string | undefined {
        return this['param_name'];
    }
    public withParamType(paramType: string): Parameter {
        this['param_type'] = paramType;
        return this;
    }
    public set paramType(paramType: string  | undefined) {
        this['param_type'] = paramType;
    }
    public get paramType(): string | undefined {
        return this['param_type'];
    }
    public withParamGroup(paramGroup: string): Parameter {
        this['param_group'] = paramGroup;
        return this;
    }
    public set paramGroup(paramGroup: string  | undefined) {
        this['param_group'] = paramGroup;
    }
    public get paramGroup(): string | undefined {
        return this['param_group'];
    }
    public withDefaultValue(defaultValue: string): Parameter {
        this['default_value'] = defaultValue;
        return this;
    }
    public set defaultValue(defaultValue: string  | undefined) {
        this['default_value'] = defaultValue;
    }
    public get defaultValue(): string | undefined {
        return this['default_value'];
    }
    public withId(id: string): Parameter {
        this['id'] = id;
        return this;
    }
    public withEncryption(encryption: boolean): Parameter {
        this['encryption'] = encryption;
        return this;
    }
    public withHint(hint: string): Parameter {
        this['hint'] = hint;
        return this;
    }
    public withQuoteParam(quoteParam: boolean): Parameter {
        this['quote_param'] = quoteParam;
        return this;
    }
    public set quoteParam(quoteParam: boolean  | undefined) {
        this['quote_param'] = quoteParam;
    }
    public get quoteParam(): boolean | undefined {
        return this['quote_param'];
    }
    public withRequired(required: boolean): Parameter {
        this['required'] = required;
        return this;
    }
    public withDescription(description: string): Parameter {
        this['description'] = description;
        return this;
    }
}