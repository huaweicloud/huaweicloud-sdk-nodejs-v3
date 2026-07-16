

export class ParametersConstraint {
    public type?: string;
    public editable?: boolean;
    public required?: boolean;
    public sensitive?: boolean;
    private 'valid_type'?: string;
    private 'valid_range'?: Array<string>;
    public constructor() { 
    }
    public withType(type: string): ParametersConstraint {
        this['type'] = type;
        return this;
    }
    public withEditable(editable: boolean): ParametersConstraint {
        this['editable'] = editable;
        return this;
    }
    public withRequired(required: boolean): ParametersConstraint {
        this['required'] = required;
        return this;
    }
    public withSensitive(sensitive: boolean): ParametersConstraint {
        this['sensitive'] = sensitive;
        return this;
    }
    public withValidType(validType: string): ParametersConstraint {
        this['valid_type'] = validType;
        return this;
    }
    public set validType(validType: string  | undefined) {
        this['valid_type'] = validType;
    }
    public get validType(): string | undefined {
        return this['valid_type'];
    }
    public withValidRange(validRange: Array<string>): ParametersConstraint {
        this['valid_range'] = validRange;
        return this;
    }
    public set validRange(validRange: Array<string>  | undefined) {
        this['valid_range'] = validRange;
    }
    public get validRange(): Array<string> | undefined {
        return this['valid_range'];
    }
}