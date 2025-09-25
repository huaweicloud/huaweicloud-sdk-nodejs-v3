

export class LtsConfigInfoResult {
    private 'log_group_name'?: string;
    private 'log_group_id'?: string;
    private 'group_log_type'?: string;
    private 'group_ttl_in_days'?: number;
    private 'log_stream_name'?: string;
    private 'log_stream_id'?: string;
    private 'stream_log_type'?: string;
    private 'stream_ttl_in_days'?: number;
    private 'stream_structure_config_id'?: string;
    private 'stream_index_config_id'?: string;
    public constructor() { 
    }
    public withLogGroupName(logGroupName: string): LtsConfigInfoResult {
        this['log_group_name'] = logGroupName;
        return this;
    }
    public set logGroupName(logGroupName: string  | undefined) {
        this['log_group_name'] = logGroupName;
    }
    public get logGroupName(): string | undefined {
        return this['log_group_name'];
    }
    public withLogGroupId(logGroupId: string): LtsConfigInfoResult {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string  | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId(): string | undefined {
        return this['log_group_id'];
    }
    public withGroupLogType(groupLogType: string): LtsConfigInfoResult {
        this['group_log_type'] = groupLogType;
        return this;
    }
    public set groupLogType(groupLogType: string  | undefined) {
        this['group_log_type'] = groupLogType;
    }
    public get groupLogType(): string | undefined {
        return this['group_log_type'];
    }
    public withGroupTtlInDays(groupTtlInDays: number): LtsConfigInfoResult {
        this['group_ttl_in_days'] = groupTtlInDays;
        return this;
    }
    public set groupTtlInDays(groupTtlInDays: number  | undefined) {
        this['group_ttl_in_days'] = groupTtlInDays;
    }
    public get groupTtlInDays(): number | undefined {
        return this['group_ttl_in_days'];
    }
    public withLogStreamName(logStreamName: string): LtsConfigInfoResult {
        this['log_stream_name'] = logStreamName;
        return this;
    }
    public set logStreamName(logStreamName: string  | undefined) {
        this['log_stream_name'] = logStreamName;
    }
    public get logStreamName(): string | undefined {
        return this['log_stream_name'];
    }
    public withLogStreamId(logStreamId: string): LtsConfigInfoResult {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string  | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId(): string | undefined {
        return this['log_stream_id'];
    }
    public withStreamLogType(streamLogType: string): LtsConfigInfoResult {
        this['stream_log_type'] = streamLogType;
        return this;
    }
    public set streamLogType(streamLogType: string  | undefined) {
        this['stream_log_type'] = streamLogType;
    }
    public get streamLogType(): string | undefined {
        return this['stream_log_type'];
    }
    public withStreamTtlInDays(streamTtlInDays: number): LtsConfigInfoResult {
        this['stream_ttl_in_days'] = streamTtlInDays;
        return this;
    }
    public set streamTtlInDays(streamTtlInDays: number  | undefined) {
        this['stream_ttl_in_days'] = streamTtlInDays;
    }
    public get streamTtlInDays(): number | undefined {
        return this['stream_ttl_in_days'];
    }
    public withStreamStructureConfigId(streamStructureConfigId: string): LtsConfigInfoResult {
        this['stream_structure_config_id'] = streamStructureConfigId;
        return this;
    }
    public set streamStructureConfigId(streamStructureConfigId: string  | undefined) {
        this['stream_structure_config_id'] = streamStructureConfigId;
    }
    public get streamStructureConfigId(): string | undefined {
        return this['stream_structure_config_id'];
    }
    public withStreamIndexConfigId(streamIndexConfigId: string): LtsConfigInfoResult {
        this['stream_index_config_id'] = streamIndexConfigId;
        return this;
    }
    public set streamIndexConfigId(streamIndexConfigId: string  | undefined) {
        this['stream_index_config_id'] = streamIndexConfigId;
    }
    public get streamIndexConfigId(): string | undefined {
        return this['stream_index_config_id'];
    }
}