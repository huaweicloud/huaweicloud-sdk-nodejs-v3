

export class CheckRuleFixFailDetailInfo {
    private 'fix_fail_reason'?: string;
    private 'host_name'?: string;
    public constructor() { 
    }
    public withFixFailReason(fixFailReason: string): CheckRuleFixFailDetailInfo {
        this['fix_fail_reason'] = fixFailReason;
        return this;
    }
    public set fixFailReason(fixFailReason: string  | undefined) {
        this['fix_fail_reason'] = fixFailReason;
    }
    public get fixFailReason(): string | undefined {
        return this['fix_fail_reason'];
    }
    public withHostName(hostName: string): CheckRuleFixFailDetailInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
}