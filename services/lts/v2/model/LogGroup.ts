

export class LogGroup {
    private 'creation_time': number | undefined;
    private 'log_group_name': string | undefined;
    private 'log_group_id': string | undefined;
    private 'ttl_in_days': number | undefined;
    public tag?: { [key: string]: string; };
    public constructor(creationTime?: any, logGroupName?: any, logGroupId?: any, ttlInDays?: any) { 
        this['creation_time'] = creationTime;
        this['log_group_name'] = logGroupName;
        this['log_group_id'] = logGroupId;
        this['ttl_in_days'] = ttlInDays;
    }
    public withCreationTime(creationTime: number): LogGroup {
        this['creation_time'] = creationTime;
        return this;
    }
    public set creationTime(creationTime: number | undefined) {
        this['creation_time'] = creationTime;
    }
    public get creationTime() {
        return this['creation_time'];
    }
    public withLogGroupName(logGroupName: string): LogGroup {
        this['log_group_name'] = logGroupName;
        return this;
    }
    public set logGroupName(logGroupName: string | undefined) {
        this['log_group_name'] = logGroupName;
    }
    public get logGroupName() {
        return this['log_group_name'];
    }
    public withLogGroupId(logGroupId: string): LogGroup {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId() {
        return this['log_group_id'];
    }
    public withTtlInDays(ttlInDays: number): LogGroup {
        this['ttl_in_days'] = ttlInDays;
        return this;
    }
    public set ttlInDays(ttlInDays: number | undefined) {
        this['ttl_in_days'] = ttlInDays;
    }
    public get ttlInDays() {
        return this['ttl_in_days'];
    }
    public withTag(tag: { [key: string]: string; }): LogGroup {
        this['tag'] = tag;
        return this;
    }
}