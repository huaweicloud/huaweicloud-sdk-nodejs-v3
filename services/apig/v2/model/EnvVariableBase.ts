

export class EnvVariableBase {
    private 'variable_value'?: string;
    public constructor(variableValue?: string) { 
        this['variable_value'] = variableValue;
    }
    public withVariableValue(variableValue: string): EnvVariableBase {
        this['variable_value'] = variableValue;
        return this;
    }
    public set variableValue(variableValue: string  | undefined) {
        this['variable_value'] = variableValue;
    }
    public get variableValue(): string | undefined {
        return this['variable_value'];
    }
}