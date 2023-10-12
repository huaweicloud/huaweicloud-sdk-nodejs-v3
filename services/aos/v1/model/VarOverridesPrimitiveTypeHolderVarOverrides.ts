

export class VarOverridesPrimitiveTypeHolderVarOverrides {
    private 'vars_uri'?: string;
    private 'vars_body'?: string;
    private 'use_stack_set_vars'?: Array<string>;
    public constructor() { 
    }
    public withVarsUri(varsUri: string): VarOverridesPrimitiveTypeHolderVarOverrides {
        this['vars_uri'] = varsUri;
        return this;
    }
    public set varsUri(varsUri: string  | undefined) {
        this['vars_uri'] = varsUri;
    }
    public get varsUri(): string | undefined {
        return this['vars_uri'];
    }
    public withVarsBody(varsBody: string): VarOverridesPrimitiveTypeHolderVarOverrides {
        this['vars_body'] = varsBody;
        return this;
    }
    public set varsBody(varsBody: string  | undefined) {
        this['vars_body'] = varsBody;
    }
    public get varsBody(): string | undefined {
        return this['vars_body'];
    }
    public withUseStackSetVars(useStackSetVars: Array<string>): VarOverridesPrimitiveTypeHolderVarOverrides {
        this['use_stack_set_vars'] = useStackSetVars;
        return this;
    }
    public set useStackSetVars(useStackSetVars: Array<string>  | undefined) {
        this['use_stack_set_vars'] = useStackSetVars;
    }
    public get useStackSetVars(): Array<string> | undefined {
        return this['use_stack_set_vars'];
    }
}