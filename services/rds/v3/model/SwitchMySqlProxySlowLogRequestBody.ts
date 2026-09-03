

export class SwitchMySqlProxySlowLogRequestBody {
    private 'lts_slow_log_enabled'?: string;
    public constructor(ltsSlowLogEnabled?: string) { 
        this['lts_slow_log_enabled'] = ltsSlowLogEnabled;
    }
    public withLtsSlowLogEnabled(ltsSlowLogEnabled: string): SwitchMySqlProxySlowLogRequestBody {
        this['lts_slow_log_enabled'] = ltsSlowLogEnabled;
        return this;
    }
    public set ltsSlowLogEnabled(ltsSlowLogEnabled: string  | undefined) {
        this['lts_slow_log_enabled'] = ltsSlowLogEnabled;
    }
    public get ltsSlowLogEnabled(): string | undefined {
        return this['lts_slow_log_enabled'];
    }
}