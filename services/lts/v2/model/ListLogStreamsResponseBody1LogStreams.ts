

export class ListLogStreamsResponseBody1LogStreams {
    private 'creation_time'?: number;
    private 'log_stream_id'?: string;
    private 'log_stream_name'?: string;
    private 'log_stream_name_alias'?: string;
    public tag?: { [key: string]: string; };
    private 'filter_count'?: number;
    private 'whether_log_storage'?: boolean;
    private 'hot_cold_separation'?: boolean;
    private 'auth_web_tracking'?: boolean;
    private 'ttl_in_days'?: number;
    private 'hot_storage_days'?: number;
    private 'log_group_id'?: string;
    public constructor(creationTime?: number, logStreamId?: string, logStreamName?: string, tag?: { [key: string]: string; }, filterCount?: number) { 
        this['creation_time'] = creationTime;
        this['log_stream_id'] = logStreamId;
        this['log_stream_name'] = logStreamName;
        this['tag'] = tag;
        this['filter_count'] = filterCount;
    }
    public withCreationTime(creationTime: number): ListLogStreamsResponseBody1LogStreams {
        this['creation_time'] = creationTime;
        return this;
    }
    public set creationTime(creationTime: number  | undefined) {
        this['creation_time'] = creationTime;
    }
    public get creationTime(): number | undefined {
        return this['creation_time'];
    }
    public withLogStreamId(logStreamId: string): ListLogStreamsResponseBody1LogStreams {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string  | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId(): string | undefined {
        return this['log_stream_id'];
    }
    public withLogStreamName(logStreamName: string): ListLogStreamsResponseBody1LogStreams {
        this['log_stream_name'] = logStreamName;
        return this;
    }
    public set logStreamName(logStreamName: string  | undefined) {
        this['log_stream_name'] = logStreamName;
    }
    public get logStreamName(): string | undefined {
        return this['log_stream_name'];
    }
    public withLogStreamNameAlias(logStreamNameAlias: string): ListLogStreamsResponseBody1LogStreams {
        this['log_stream_name_alias'] = logStreamNameAlias;
        return this;
    }
    public set logStreamNameAlias(logStreamNameAlias: string  | undefined) {
        this['log_stream_name_alias'] = logStreamNameAlias;
    }
    public get logStreamNameAlias(): string | undefined {
        return this['log_stream_name_alias'];
    }
    public withTag(tag: { [key: string]: string; }): ListLogStreamsResponseBody1LogStreams {
        this['tag'] = tag;
        return this;
    }
    public withFilterCount(filterCount: number): ListLogStreamsResponseBody1LogStreams {
        this['filter_count'] = filterCount;
        return this;
    }
    public set filterCount(filterCount: number  | undefined) {
        this['filter_count'] = filterCount;
    }
    public get filterCount(): number | undefined {
        return this['filter_count'];
    }
    public withWhetherLogStorage(whetherLogStorage: boolean): ListLogStreamsResponseBody1LogStreams {
        this['whether_log_storage'] = whetherLogStorage;
        return this;
    }
    public set whetherLogStorage(whetherLogStorage: boolean  | undefined) {
        this['whether_log_storage'] = whetherLogStorage;
    }
    public get whetherLogStorage(): boolean | undefined {
        return this['whether_log_storage'];
    }
    public withHotColdSeparation(hotColdSeparation: boolean): ListLogStreamsResponseBody1LogStreams {
        this['hot_cold_separation'] = hotColdSeparation;
        return this;
    }
    public set hotColdSeparation(hotColdSeparation: boolean  | undefined) {
        this['hot_cold_separation'] = hotColdSeparation;
    }
    public get hotColdSeparation(): boolean | undefined {
        return this['hot_cold_separation'];
    }
    public withAuthWebTracking(authWebTracking: boolean): ListLogStreamsResponseBody1LogStreams {
        this['auth_web_tracking'] = authWebTracking;
        return this;
    }
    public set authWebTracking(authWebTracking: boolean  | undefined) {
        this['auth_web_tracking'] = authWebTracking;
    }
    public get authWebTracking(): boolean | undefined {
        return this['auth_web_tracking'];
    }
    public withTtlInDays(ttlInDays: number): ListLogStreamsResponseBody1LogStreams {
        this['ttl_in_days'] = ttlInDays;
        return this;
    }
    public set ttlInDays(ttlInDays: number  | undefined) {
        this['ttl_in_days'] = ttlInDays;
    }
    public get ttlInDays(): number | undefined {
        return this['ttl_in_days'];
    }
    public withHotStorageDays(hotStorageDays: number): ListLogStreamsResponseBody1LogStreams {
        this['hot_storage_days'] = hotStorageDays;
        return this;
    }
    public set hotStorageDays(hotStorageDays: number  | undefined) {
        this['hot_storage_days'] = hotStorageDays;
    }
    public get hotStorageDays(): number | undefined {
        return this['hot_storage_days'];
    }
    public withLogGroupId(logGroupId: string): ListLogStreamsResponseBody1LogStreams {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string  | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId(): string | undefined {
        return this['log_group_id'];
    }
}