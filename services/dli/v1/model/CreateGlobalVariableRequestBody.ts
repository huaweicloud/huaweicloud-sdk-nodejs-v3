

export class CreateGlobalVariableRequestBody {
    private 'var_name'?: string;
    private 'var_value'?: string;
    private 'is_sensitive'?: boolean;
    public constructor(varName?: string, varValue?: string) { 
        this['var_name'] = varName;
        this['var_value'] = varValue;
    }
    public withVarName(varName: string): CreateGlobalVariableRequestBody {
        this['var_name'] = varName;
        return this;
    }
    public set varName(varName: string  | undefined) {
        this['var_name'] = varName;
    }
    public get varName(): string | undefined {
        return this['var_name'];
    }
    public withVarValue(varValue: string): CreateGlobalVariableRequestBody {
        this['var_value'] = varValue;
        return this;
    }
    public set varValue(varValue: string  | undefined) {
        this['var_value'] = varValue;
    }
    public get varValue(): string | undefined {
        return this['var_value'];
    }
    public withIsSensitive(isSensitive: boolean): CreateGlobalVariableRequestBody {
        this['is_sensitive'] = isSensitive;
        return this;
    }
    public set isSensitive(isSensitive: boolean  | undefined) {
        this['is_sensitive'] = isSensitive;
    }
    public get isSensitive(): boolean | undefined {
        return this['is_sensitive'];
    }
}