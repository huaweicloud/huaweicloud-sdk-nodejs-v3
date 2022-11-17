import { VariableValidationResponse } from './VariableValidationResponse';


export class VariableResponse {
    public name?: string;
    public type?: string;
    public description?: string;
    private 'default'?: object | undefined;
    public sensitive?: boolean;
    public nullable?: boolean;
    public validations?: Array<VariableValidationResponse>;
    public constructor() { 
    }
    public withName(name: string): VariableResponse {
        this['name'] = name;
        return this;
    }
    public withType(type: string): VariableResponse {
        this['type'] = type;
        return this;
    }
    public withDescription(description: string): VariableResponse {
        this['description'] = description;
        return this;
    }
    public withDefault(_default: object): VariableResponse {
        this['default'] = _default;
        return this;
    }
    public set _default(_default: object | undefined) {
        this['default'] = _default;
    }
    public get _default() {
        return this['default'];
    }
    public withSensitive(sensitive: boolean): VariableResponse {
        this['sensitive'] = sensitive;
        return this;
    }
    public withNullable(nullable: boolean): VariableResponse {
        this['nullable'] = nullable;
        return this;
    }
    public withValidations(validations: Array<VariableValidationResponse>): VariableResponse {
        this['validations'] = validations;
        return this;
    }
}