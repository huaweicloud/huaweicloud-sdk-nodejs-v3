

export class SubnetExtraDhcpOpt {
    private 'opt_name'?: string;
    private 'opt_value'?: string;
    private 'ip_version'?: number;
    public constructor(optName?: string, optValue?: string, ipVersion?: number) { 
        this['opt_name'] = optName;
        this['opt_value'] = optValue;
        this['ip_version'] = ipVersion;
    }
    public withOptName(optName: string): SubnetExtraDhcpOpt {
        this['opt_name'] = optName;
        return this;
    }
    public set optName(optName: string  | undefined) {
        this['opt_name'] = optName;
    }
    public get optName(): string | undefined {
        return this['opt_name'];
    }
    public withOptValue(optValue: string): SubnetExtraDhcpOpt {
        this['opt_value'] = optValue;
        return this;
    }
    public set optValue(optValue: string  | undefined) {
        this['opt_value'] = optValue;
    }
    public get optValue(): string | undefined {
        return this['opt_value'];
    }
    public withIpVersion(ipVersion: number): SubnetExtraDhcpOpt {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: number  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): number | undefined {
        return this['ip_version'];
    }
}