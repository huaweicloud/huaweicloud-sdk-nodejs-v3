import { Constraint } from './Constraint';
import { ParamTypeLimits } from './ParamTypeLimits';


export class TemplateParam {
    public required?: string;
    public visible?: string;
    public name?: string;
    public value?: string;
    public description?: string;
    public paramtype?: string;
    private 'display_type'?: string;
    private 'display_name'?: string;
    private 'is_static'?: boolean;
    private 'is_default'?: boolean;
    public limits?: Array<ParamTypeLimits>;
    public constraints?: Array<Constraint>;
    public constructor(required?: string, visible?: string, name?: string, value?: string, description?: string, paramtype?: string, displayType?: string, displayName?: string, isStatic?: boolean, isDefault?: boolean, limits?: Array<ParamTypeLimits>, constraints?: Array<Constraint>) { 
        this['required'] = required;
        this['visible'] = visible;
        this['name'] = name;
        this['value'] = value;
        this['description'] = description;
        this['paramtype'] = paramtype;
        this['display_type'] = displayType;
        this['display_name'] = displayName;
        this['is_static'] = isStatic;
        this['is_default'] = isDefault;
        this['limits'] = limits;
        this['constraints'] = constraints;
    }
    public withRequired(required: string): TemplateParam {
        this['required'] = required;
        return this;
    }
    public withVisible(visible: string): TemplateParam {
        this['visible'] = visible;
        return this;
    }
    public withName(name: string): TemplateParam {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): TemplateParam {
        this['value'] = value;
        return this;
    }
    public withDescription(description: string): TemplateParam {
        this['description'] = description;
        return this;
    }
    public withParamtype(paramtype: string): TemplateParam {
        this['paramtype'] = paramtype;
        return this;
    }
    public withDisplayType(displayType: string): TemplateParam {
        this['display_type'] = displayType;
        return this;
    }
    public set displayType(displayType: string  | undefined) {
        this['display_type'] = displayType;
    }
    public get displayType(): string | undefined {
        return this['display_type'];
    }
    public withDisplayName(displayName: string): TemplateParam {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withIsStatic(isStatic: boolean): TemplateParam {
        this['is_static'] = isStatic;
        return this;
    }
    public set isStatic(isStatic: boolean  | undefined) {
        this['is_static'] = isStatic;
    }
    public get isStatic(): boolean | undefined {
        return this['is_static'];
    }
    public withIsDefault(isDefault: boolean): TemplateParam {
        this['is_default'] = isDefault;
        return this;
    }
    public set isDefault(isDefault: boolean  | undefined) {
        this['is_default'] = isDefault;
    }
    public get isDefault(): boolean | undefined {
        return this['is_default'];
    }
    public withLimits(limits: Array<ParamTypeLimits>): TemplateParam {
        this['limits'] = limits;
        return this;
    }
    public withConstraints(constraints: Array<Constraint>): TemplateParam {
        this['constraints'] = constraints;
        return this;
    }
}