

export class CreateSqlValidationRequestBody {
    public script?: string;
    public constructor(script?: string) { 
        this['script'] = script;
    }
    public withScript(script: string): CreateSqlValidationRequestBody {
        this['script'] = script;
        return this;
    }
}