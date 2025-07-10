import { TemplateParamVariableValidation } from './TemplateParamVariableValidation';


export class TemplateParamVariable {
    private 'default'?: object;
    public name?: string;
    public description?: string;
    public nullable?: boolean;
    public sensitive?: boolean;
    public type?: string;
    public validations?: Array<TemplateParamVariableValidation>;
    public constructor() { 
    }
    public withDefault(_default: object): TemplateParamVariable {
        this['default'] = _default;
        return this;
    }
    public set _default(_default: object  | undefined) {
        this['default'] = _default;
    }
    public get _default(): object | undefined {
        return this['default'];
    }
    public withName(name: string): TemplateParamVariable {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): TemplateParamVariable {
        this['description'] = description;
        return this;
    }
    public withNullable(nullable: boolean): TemplateParamVariable {
        this['nullable'] = nullable;
        return this;
    }
    public withSensitive(sensitive: boolean): TemplateParamVariable {
        this['sensitive'] = sensitive;
        return this;
    }
    public withType(type: string): TemplateParamVariable {
        this['type'] = type;
        return this;
    }
    public withValidations(validations: Array<TemplateParamVariableValidation>): TemplateParamVariable {
        this['validations'] = validations;
        return this;
    }
}