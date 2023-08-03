

export class VarsStructure {
    private 'var_key'?: string;
    private 'var_value'?: object;
    public constructor() { 
    }
    public withVarKey(varKey: string): VarsStructure {
        this['var_key'] = varKey;
        return this;
    }
    public set varKey(varKey: string  | undefined) {
        this['var_key'] = varKey;
    }
    public get varKey(): string | undefined {
        return this['var_key'];
    }
    public withVarValue(varValue: object): VarsStructure {
        this['var_value'] = varValue;
        return this;
    }
    public set varValue(varValue: object  | undefined) {
        this['var_value'] = varValue;
    }
    public get varValue(): object | undefined {
        return this['var_value'];
    }
}