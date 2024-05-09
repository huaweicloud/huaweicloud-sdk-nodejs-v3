

export class DbConfig {
    private 'param_name'?: string;
    public value?: string;
    public constructor() { 
    }
    public withParamName(paramName: string): DbConfig {
        this['param_name'] = paramName;
        return this;
    }
    public set paramName(paramName: string  | undefined) {
        this['param_name'] = paramName;
    }
    public get paramName(): string | undefined {
        return this['param_name'];
    }
    public withValue(value: string): DbConfig {
        this['value'] = value;
        return this;
    }
}