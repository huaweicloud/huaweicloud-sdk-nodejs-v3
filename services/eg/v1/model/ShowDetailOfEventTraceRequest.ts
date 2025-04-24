

export class ShowDetailOfEventTraceRequest {
    private 'trace_id'?: string;
    private 'channel_id'?: string;
    public constructor(traceId?: string, channelId?: string) { 
        this['trace_id'] = traceId;
        this['channel_id'] = channelId;
    }
    public withTraceId(traceId: string): ShowDetailOfEventTraceRequest {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withChannelId(channelId: string): ShowDetailOfEventTraceRequest {
        this['channel_id'] = channelId;
        return this;
    }
    public set channelId(channelId: string  | undefined) {
        this['channel_id'] = channelId;
    }
    public get channelId(): string | undefined {
        return this['channel_id'];
    }
}