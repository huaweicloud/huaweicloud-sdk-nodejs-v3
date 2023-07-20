

export class ListLogStreamsResponseBody1LogStreams {
    private 'creation_time'?: number;
    private 'log_stream_id'?: string;
    private 'log_stream_name'?: string;
    public tag?: { [key: string]: string; };
    private 'filter_count'?: number;
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
}