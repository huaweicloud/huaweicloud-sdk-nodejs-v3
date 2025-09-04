

export class HtapLTSConfigResponseLtsConfigs {
    private 'log_type'?: string;
    private 'lts_group_id'?: string;
    private 'lts_stream_id'?: string;
    public enabled?: string;
    public constructor(logType?: string, ltsGroupId?: string, ltsStreamId?: string, enabled?: string) { 
        this['log_type'] = logType;
        this['lts_group_id'] = ltsGroupId;
        this['lts_stream_id'] = ltsStreamId;
        this['enabled'] = enabled;
    }
    public withLogType(logType: string): HtapLTSConfigResponseLtsConfigs {
        this['log_type'] = logType;
        return this;
    }
    public set logType(logType: string  | undefined) {
        this['log_type'] = logType;
    }
    public get logType(): string | undefined {
        return this['log_type'];
    }
    public withLtsGroupId(ltsGroupId: string): HtapLTSConfigResponseLtsConfigs {
        this['lts_group_id'] = ltsGroupId;
        return this;
    }
    public set ltsGroupId(ltsGroupId: string  | undefined) {
        this['lts_group_id'] = ltsGroupId;
    }
    public get ltsGroupId(): string | undefined {
        return this['lts_group_id'];
    }
    public withLtsStreamId(ltsStreamId: string): HtapLTSConfigResponseLtsConfigs {
        this['lts_stream_id'] = ltsStreamId;
        return this;
    }
    public set ltsStreamId(ltsStreamId: string  | undefined) {
        this['lts_stream_id'] = ltsStreamId;
    }
    public get ltsStreamId(): string | undefined {
        return this['lts_stream_id'];
    }
    public withEnabled(enabled: string): HtapLTSConfigResponseLtsConfigs {
        this['enabled'] = enabled;
        return this;
    }
}