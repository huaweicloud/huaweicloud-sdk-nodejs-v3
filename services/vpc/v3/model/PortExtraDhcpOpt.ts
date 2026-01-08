

export class PortExtraDhcpOpt {
    private 'opt_name'?: string;
    private 'opt_value'?: string;
    public constructor(optName?: string, optValue?: string) { 
        this['opt_name'] = optName;
        this['opt_value'] = optValue;
    }
    public withOptName(optName: string): PortExtraDhcpOpt {
        this['opt_name'] = optName;
        return this;
    }
    public set optName(optName: string  | undefined) {
        this['opt_name'] = optName;
    }
    public get optName(): string | undefined {
        return this['opt_name'];
    }
    public withOptValue(optValue: string): PortExtraDhcpOpt {
        this['opt_value'] = optValue;
        return this;
    }
    public set optValue(optValue: string  | undefined) {
        this['opt_value'] = optValue;
    }
    public get optValue(): string | undefined {
        return this['opt_value'];
    }
}