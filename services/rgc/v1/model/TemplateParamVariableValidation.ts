

export class TemplateParamVariableValidation {
    public condition?: string;
    private 'error_message'?: string;
    public constructor() { 
    }
    public withCondition(condition: string): TemplateParamVariableValidation {
        this['condition'] = condition;
        return this;
    }
    public withErrorMessage(errorMessage: string): TemplateParamVariableValidation {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
}