

export class LoggingBucketBaseline {
    private 'retention_days'?: number;
    private 'enable_multi_az'?: boolean;
    public constructor(retentionDays?: number) { 
        this['retention_days'] = retentionDays;
    }
    public withRetentionDays(retentionDays: number): LoggingBucketBaseline {
        this['retention_days'] = retentionDays;
        return this;
    }
    public set retentionDays(retentionDays: number  | undefined) {
        this['retention_days'] = retentionDays;
    }
    public get retentionDays(): number | undefined {
        return this['retention_days'];
    }
    public withEnableMultiAz(enableMultiAz: boolean): LoggingBucketBaseline {
        this['enable_multi_az'] = enableMultiAz;
        return this;
    }
    public set enableMultiAz(enableMultiAz: boolean  | undefined) {
        this['enable_multi_az'] = enableMultiAz;
    }
    public get enableMultiAz(): boolean | undefined {
        return this['enable_multi_az'];
    }
}