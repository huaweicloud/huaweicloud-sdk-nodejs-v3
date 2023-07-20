

export class ExtraDhcpOption {
    private 'opt_name'?: ExtraDhcpOptionOptNameEnum | string;
    private 'opt_value'?: string;
    public constructor(optName?: string) { 
        this['opt_name'] = optName;
    }
    public withOptName(optName: ExtraDhcpOptionOptNameEnum | string): ExtraDhcpOption {
        this['opt_name'] = optName;
        return this;
    }
    public set optName(optName: ExtraDhcpOptionOptNameEnum | string  | undefined) {
        this['opt_name'] = optName;
    }
    public get optName(): ExtraDhcpOptionOptNameEnum | string | undefined {
        return this['opt_name'];
    }
    public withOptValue(optValue: string): ExtraDhcpOption {
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

/**
    * @export
    * @enum {string}
    */
export enum ExtraDhcpOptionOptNameEnum {
    NTP = 'ntp',
    ADDRESSTIME = 'addresstime'
}
