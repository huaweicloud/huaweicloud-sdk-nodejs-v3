

export class CreateLogGroupParams {
    private 'log_group_name'?: string;
    private 'ttl_in_days'?: number;
    public constructor(logGroupName?: string, ttlInDays?: number) { 
        this['log_group_name'] = logGroupName;
        this['ttl_in_days'] = ttlInDays;
    }
    public withLogGroupName(logGroupName: string): CreateLogGroupParams {
        this['log_group_name'] = logGroupName;
        return this;
    }
    public set logGroupName(logGroupName: string  | undefined) {
        this['log_group_name'] = logGroupName;
    }
    public get logGroupName(): string | undefined {
        return this['log_group_name'];
    }
    public withTtlInDays(ttlInDays: number): CreateLogGroupParams {
        this['ttl_in_days'] = ttlInDays;
        return this;
    }
    public set ttlInDays(ttlInDays: number  | undefined) {
        this['ttl_in_days'] = ttlInDays;
    }
    public get ttlInDays(): number | undefined {
        return this['ttl_in_days'];
    }
}