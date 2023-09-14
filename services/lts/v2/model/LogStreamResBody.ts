

export class LogStreamResBody {
    private 'creation_time'?: number;
    private 'log_stream_id'?: string;
    private 'log_stream_name'?: string;
    public tag?: { [key: string]: string; };
    private 'filter_count'?: number;
    private 'is_favorite'?: boolean;
    public constructor() { 
    }
    public withCreationTime(creationTime: number): LogStreamResBody {
        this['creation_time'] = creationTime;
        return this;
    }
    public set creationTime(creationTime: number  | undefined) {
        this['creation_time'] = creationTime;
    }
    public get creationTime(): number | undefined {
        return this['creation_time'];
    }
    public withLogStreamId(logStreamId: string): LogStreamResBody {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string  | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId(): string | undefined {
        return this['log_stream_id'];
    }
    public withLogStreamName(logStreamName: string): LogStreamResBody {
        this['log_stream_name'] = logStreamName;
        return this;
    }
    public set logStreamName(logStreamName: string  | undefined) {
        this['log_stream_name'] = logStreamName;
    }
    public get logStreamName(): string | undefined {
        return this['log_stream_name'];
    }
    public withTag(tag: { [key: string]: string; }): LogStreamResBody {
        this['tag'] = tag;
        return this;
    }
    public withFilterCount(filterCount: number): LogStreamResBody {
        this['filter_count'] = filterCount;
        return this;
    }
    public set filterCount(filterCount: number  | undefined) {
        this['filter_count'] = filterCount;
    }
    public get filterCount(): number | undefined {
        return this['filter_count'];
    }
    public withIsFavorite(isFavorite: boolean): LogStreamResBody {
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