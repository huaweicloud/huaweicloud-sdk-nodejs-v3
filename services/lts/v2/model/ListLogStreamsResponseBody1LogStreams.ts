

export class ListLogStreamsResponseBody1LogStreams {
    private 'creation_time': number | undefined;
    private 'log_stream_id': string | undefined;
    private 'log_stream_name': string | undefined;
    public tag: { [key: string]: string; };
    private 'filter_count': number | undefined;
    public constructor(creationTime?: any, logStreamId?: any, logStreamName?: any, tag?: any, filterCount?: any) { 
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
    public set creationTime(creationTime: number | undefined) {
        this['creation_time'] = creationTime;
    }
    public get creationTime() {
        return this['creation_time'];
    }
    public withLogStreamId(logStreamId: string): ListLogStreamsResponseBody1LogStreams {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId() {
        return this['log_stream_id'];
    }
    public withLogStreamName(logStreamName: string): ListLogStreamsResponseBody1LogStreams {
        this['log_stream_name'] = logStreamName;
        return this;
    }
    public set logStreamName(logStreamName: string | undefined) {
        this['log_stream_name'] = logStreamName;
    }
    public get logStreamName() {
        return this['log_stream_name'];
    }
    public withTag(tag: { [key: string]: string; }): ListLogStreamsResponseBody1LogStreams {
        this['tag'] = tag;
        return this;
    }
    public withFilterCount(filterCount: number): ListLogStreamsResponseBody1LogStreams {
        this['filter_count'] = filterCount;
        return this;
    }
    public set filterCount(filterCount: number | undefined) {
        this['filter_count'] = filterCount;
    }
    public get filterCount() {
        return this['filter_count'];
    }
}