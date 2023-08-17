

export class PipelineParam {
    public name?: string;
    public value?: string;
    public description?: string;
    private 'param_type'?: string;
    private 'is_static'?: boolean;
    private 'is_default'?: boolean;
    public constructor(name?: string, value?: string, description?: string, paramType?: string, isStatic?: boolean, isDefault?: boolean) { 
        this['name'] = name;
        this['value'] = value;
        this['description'] = description;
        this['param_type'] = paramType;
        this['is_static'] = isStatic;
        this['is_default'] = isDefault;
    }
    public withName(name: string): PipelineParam {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): PipelineParam {
        this['value'] = value;
        return this;
    }
    public withDescription(description: string): PipelineParam {
        this['description'] = description;
        return this;
    }
    public withParamType(paramType: string): PipelineParam {
        this['param_type'] = paramType;
        return this;
    }
    public set paramType(paramType: string  | undefined) {
        this['param_type'] = paramType;
    }
    public get paramType(): string | undefined {
        return this['param_type'];
    }
    public withIsStatic(isStatic: boolean): PipelineParam {
        this['is_static'] = isStatic;
        return this;
    }
    public set isStatic(isStatic: boolean  | undefined) {
        this['is_static'] = isStatic;
    }
    public get isStatic(): boolean | undefined {
        return this['is_static'];
    }
    public withIsDefault(isDefault: boolean): PipelineParam {
        this['is_default'] = isDefault;
        return this;
    }
    public set isDefault(isDefault: boolean  | undefined) {
        this['is_default'] = isDefault;
    }
    public get isDefault(): boolean | undefined {
        return this['is_default'];
    }
}