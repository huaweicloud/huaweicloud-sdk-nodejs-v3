

export class ExtraDhcpOpt {
    private 'opt_name'?: string | undefined;
    private 'opt_value'?: string | undefined;
    public constructor() { 
    }
    public withOptName(optName: string): ExtraDhcpOpt {
        this['opt_name'] = optName;
        return this;
    }
    public set optName(optName: string | undefined) {
        this['opt_name'] = optName;
    }
    public get optName() {
        return this['opt_name'];
    }
    public withOptValue(optValue: string): ExtraDhcpOpt {
        this['opt_value'] = optValue;
        return this;
    }
    public set optValue(optValue: string | undefined) {
        this['opt_value'] = optValue;
    }
    public get optValue() {
        return this['opt_value'];
    }
}