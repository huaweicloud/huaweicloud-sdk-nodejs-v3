

export class VariableValidationResponse {
    public condition?: string;
    private 'error_message'?: string | undefined;
    public constructor() { 
    }
    public withCondition(condition: string): VariableValidationResponse {
        this['condition'] = condition;
        return this;
    }
    public withErrorMessage(errorMessage: string): VariableValidationResponse {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage() {
        return this['error_message'];
    }
}