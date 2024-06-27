

export class ChDatabaseConfigsInfo {
    private 'param_name'?: string;
    public value?: string;
    public constructor(paramName?: string, value?: string) { 
        this['param_name'] = paramName;
        this['value'] = value;
    }
    public withParamName(paramName: string): ChDatabaseConfigsInfo {
        this['param_name'] = paramName;
        return this;
    }
    public set paramName(paramName: string  | undefined) {
        this['param_name'] = paramName;
    }
    public get paramName(): string | undefined {
        return this['param_name'];
    }
    public withValue(value: string): ChDatabaseConfigsInfo {
        this['value'] = value;
        return this;
    }
}