

export class LogMappingStreamInfo {
    private 'source_log_stream_id'?: string;
    private 'target_log_stream_id'?: string;
    private 'target_log_stream_name'?: string;
    private 'target_log_stream_eps_id'?: string;
    private 'target_log_stream_ttl'?: number;
    public constructor() { 
    }
    public withSourceLogStreamId(sourceLogStreamId: string): LogMappingStreamInfo {
        this['source_log_stream_id'] = sourceLogStreamId;
        return this;
    }
    public set sourceLogStreamId(sourceLogStreamId: string  | undefined) {
        this['source_log_stream_id'] = sourceLogStreamId;
    }
    public get sourceLogStreamId(): string | undefined {
        return this['source_log_stream_id'];
    }
    public withTargetLogStreamId(targetLogStreamId: string): LogMappingStreamInfo {
        this['target_log_stream_id'] = targetLogStreamId;
        return this;
    }
    public set targetLogStreamId(targetLogStreamId: string  | undefined) {
        this['target_log_stream_id'] = targetLogStreamId;
    }
    public get targetLogStreamId(): string | undefined {
        return this['target_log_stream_id'];
    }
    public withTargetLogStreamName(targetLogStreamName: string): LogMappingStreamInfo {
        this['target_log_stream_name'] = targetLogStreamName;
        return this;
    }
    public set targetLogStreamName(targetLogStreamName: string  | undefined) {
        this['target_log_stream_name'] = targetLogStreamName;
    }
    public get targetLogStreamName(): string | undefined {
        return this['target_log_stream_name'];
    }
    public withTargetLogStreamEpsId(targetLogStreamEpsId: string): LogMappingStreamInfo {
        this['target_log_stream_eps_id'] = targetLogStreamEpsId;
        return this;
    }
    public set targetLogStreamEpsId(targetLogStreamEpsId: string  | undefined) {
        this['target_log_stream_eps_id'] = targetLogStreamEpsId;
    }
    public get targetLogStreamEpsId(): string | undefined {
        return this['target_log_stream_eps_id'];
    }
    public withTargetLogStreamTtl(targetLogStreamTtl: number): LogMappingStreamInfo {
        this['target_log_stream_ttl'] = targetLogStreamTtl;
        return this;
    }
    public set targetLogStreamTtl(targetLogStreamTtl: number  | undefined) {
        this['target_log_stream_ttl'] = targetLogStreamTtl;
    }
    public get targetLogStreamTtl(): number | undefined {
        return this['target_log_stream_ttl'];
    }
}