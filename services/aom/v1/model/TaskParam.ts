

export class TaskParam {
    private 'param_name'?: string;
    private 'param_type'?: string;
    private 'param_group'?: string;
    private 'default_value'?: string;
    public constructor(paramName?: string) { 
        this['param_name'] = paramName;
    }
    public withParamName(paramName: string): TaskParam {
        this['param_name'] = paramName;
        return this;
    }
    public set paramName(paramName: string  | undefined) {
        this['param_name'] = paramName;
    }
    public get paramName(): string | undefined {
        return this['param_name'];
    }
    public withParamType(paramType: string): TaskParam {
        this['param_type'] = paramType;
        return this;
    }
    public set paramType(paramType: string  | undefined) {
        this['param_type'] = paramType;
    }
    public get paramType(): string | undefined {
        return this['param_type'];
    }
    public withParamGroup(paramGroup: string): TaskParam {
        this['param_group'] = paramGroup;
        return this;
    }
    public set paramGroup(paramGroup: string  | undefined) {
        this['param_group'] = paramGroup;
    }
    public get paramGroup(): string | undefined {
        return this['param_group'];
    }
    public withDefaultValue(defaultValue: string): TaskParam {
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