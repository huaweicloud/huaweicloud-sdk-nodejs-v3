

export class LogGroup {
    private 'creation_time'?: number;
    private 'log_group_name'?: string;
    private 'log_group_id'?: string;
    private 'ttl_in_days'?: number;
    public tag?: { [key: string]: string; };
    private 'log_group_name_alias'?: string;
    public constructor(creationTime?: number, logGroupName?: string, logGroupId?: string, ttlInDays?: number) { 
        this['creation_time'] = creationTime;
        this['log_group_name'] = logGroupName;
        this['log_group_id'] = logGroupId;
        this['ttl_in_days'] = ttlInDays;
    }
    public withCreationTime(creationTime: number): LogGroup {
        this['creation_time'] = creationTime;
        return this;
    }
    public set creationTime(creationTime: number  | undefined) {
        this['creation_time'] = creationTime;
    }
    public get creationTime(): number | undefined {
        return this['creation_time'];
    }
    public withLogGroupName(logGroupName: string): LogGroup {
        this['log_group_name'] = logGroupName;
        return this;
    }
    public set logGroupName(logGroupName: string  | undefined) {
        this['log_group_name'] = logGroupName;
    }
    public get logGroupName(): string | undefined {
        return this['log_group_name'];
    }
    public withLogGroupId(logGroupId: string): LogGroup {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string  | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId(): string | undefined {
        return this['log_group_id'];
    }
    public withTtlInDays(ttlInDays: number): LogGroup {
        this['ttl_in_days'] = ttlInDays;
        return this;
    }
    public set ttlInDays(ttlInDays: number  | undefined) {
        this['ttl_in_days'] = ttlInDays;
    }
    public get ttlInDays(): number | undefined {
        return this['ttl_in_days'];
    }
    public withTag(tag: { [key: string]: string; }): LogGroup {
        this['tag'] = tag;
        return this;
    }
    public withLogGroupNameAlias(logGroupNameAlias: string): LogGroup {
        this['log_group_name_alias'] = logGroupNameAlias;
        return this;
    }
    public set logGroupNameAlias(logGroupNameAlias: string  | undefined) {
        this['log_group_name_alias'] = logGroupNameAlias;
    }
    public get logGroupNameAlias(): string | undefined {
        return this['log_group_name_alias'];
    }
}