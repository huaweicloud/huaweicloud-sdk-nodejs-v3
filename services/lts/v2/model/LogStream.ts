

export class LogStream {
    private 'creation_time'?: number;
    private 'log_stream_name'?: string;
    private 'log_stream_id'?: string;
    private 'filter_count'?: number;
    public tag?: { [key: string]: string; };
    private 'is_favorite'?: boolean;
    public constructor(creationTime?: number, logStreamName?: string, logStreamId?: string, filterCount?: number) { 
        this['creation_time'] = creationTime;
        this['log_stream_name'] = logStreamName;
        this['log_stream_id'] = logStreamId;
        this['filter_count'] = filterCount;
    }
    public withCreationTime(creationTime: number): LogStream {
        this['creation_time'] = creationTime;
        return this;
    }
    public set creationTime(creationTime: number  | undefined) {
        this['creation_time'] = creationTime;
    }
    public get creationTime(): number | undefined {
        return this['creation_time'];
    }
    public withLogStreamName(logStreamName: string): LogStream {
        this['log_stream_name'] = logStreamName;
        return this;
    }
    public set logStreamName(logStreamName: string  | undefined) {
        this['log_stream_name'] = logStreamName;
    }
    public get logStreamName(): string | undefined {
        return this['log_stream_name'];
    }
    public withLogStreamId(logStreamId: string): LogStream {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string  | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId(): string | undefined {
        return this['log_stream_id'];
    }
    public withFilterCount(filterCount: number): LogStream {
        this['filter_count'] = filterCount;
        return this;
    }
    public set filterCount(filterCount: number  | undefined) {
        this['filter_count'] = filterCount;
    }
    public get filterCount(): number | undefined {
        return this['filter_count'];
    }
    public withTag(tag: { [key: string]: string; }): LogStream {
        this['tag'] = tag;
        return this;
    }
    public withIsFavorite(isFavorite: boolean): LogStream {
        this['is_favorite'] = isFavorite;
        return this;
    }
    public set isFavorite(isFavorite: boolean  | undefined) {
        this['is_favorite'] = isFavorite;
    }
    public get isFavorite(): boolean | undefined {
        return this['is_favorite'];
    }
}