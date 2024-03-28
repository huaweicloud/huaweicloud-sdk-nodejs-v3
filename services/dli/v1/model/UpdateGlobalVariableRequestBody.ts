

export class UpdateGlobalVariableRequestBody {
    private 'var_value'?: string;
    public constructor(varValue?: string) { 
        this['var_value'] = varValue;
    }
    public withVarValue(varValue: string): UpdateGlobalVariableRequestBody {
        this['var_value'] = varValue;
        return this;
    }
    public set varValue(varValue: string  | undefined) {
        this['var_value'] = varValue;
    }
    public get varValue(): string | undefined {
        return this['var_value'];
    }
}