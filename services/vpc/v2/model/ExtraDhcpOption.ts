

export class ExtraDhcpOption {
    private 'opt_name': ExtraDhcpOptionOptNameEnum | undefined;
    private 'opt_value'?: string | undefined;
    public constructor(optName?: any) { 
        this['opt_name'] = optName;
    }
    public withOptName(optName: ExtraDhcpOptionOptNameEnum): ExtraDhcpOption {
        this['opt_name'] = optName;
        return this;
    }
    public set optName(optName: ExtraDhcpOptionOptNameEnum | undefined) {
        this['opt_name'] = optName;
    }
    public get optName() {
        return this['opt_name'];
    }
    public withOptValue(optValue: string): ExtraDhcpOption {
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

/**
    * @export
    * @enum {string}
    */
export enum ExtraDhcpOptionOptNameEnum {
    NTP = 'ntp'
}
