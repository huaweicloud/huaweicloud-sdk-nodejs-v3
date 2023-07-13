

export class LogStream {
    private 'creation_time': number | undefined;
    private 'log_stream_name': string | undefined;
    private 'log_stream_id': string | undefined;
    private 'filter_count': number | undefined;
    public tag?: { [key: string]: string; };
    private 'is_favorite'?: boolean | undefined;
    public constructor(creationTime?: any, logStreamName?: any, logStreamId?: any, filterCount?: any) { 
        this['creation_time'] = creationTime;
        this['log_stream_name'] = logStreamName;
        this['log_stream_id'] = logStreamId;
        this['filter_count'] = filterCount;
    }
    public withCreationTime(creationTime: number): LogStream {
        this['creation_time'] = creationTime;
        return this;
    }
    public set creationTime(creationTime: number | undefined) {
        this['creation_time'] = creationTime;
    }
    public get creationTime() {
        return this['creation_time'];
    }
    public withLogStreamName(logStreamName: string): LogStream {
        this['log_stream_name'] = logStreamName;
        return this;
    }
    public set logStreamName(logStreamName: string | undefined) {
        this['log_stream_name'] = logStreamName;
    }
    public get logStreamName() {
        return this['log_stream_name'];
    }
    public withLogStreamId(logStreamId: string): LogStream {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId() {
        return this['log_stream_id'];
    }
    public withFilterCount(filterCount: number): LogStream {
        this['filter_count'] = filterCount;
        return this;
    }
    public set filterCount(filterCount: number | undefined) {
        this['filter_count'] = filterCount;
    }
    public get filterCount() {
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
    public set isFavorite(isFavorite: boolean | undefined) {
        this['is_favorite'] = isFavorite;
    }
    public get isFavorite() {
        return this['is_favorite'];
    }
}