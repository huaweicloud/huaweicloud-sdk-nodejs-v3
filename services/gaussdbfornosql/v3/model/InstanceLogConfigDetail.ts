

export class InstanceLogConfigDetail {
    private 'log_type'?: InstanceLogConfigDetailLogTypeEnum | string;
    private 'lts_group_id'?: string;
    private 'lts_stream_id'?: string;
    public enabled?: boolean;
    public constructor(logType?: string, ltsGroupId?: string, ltsStreamId?: string) { 
        this['log_type'] = logType;
        this['lts_group_id'] = ltsGroupId;
        this['lts_stream_id'] = ltsStreamId;
    }
    public withLogType(logType: InstanceLogConfigDetailLogTypeEnum | string): InstanceLogConfigDetail {
        this['log_type'] = logType;
        return this;
    }
    public set logType(logType: InstanceLogConfigDetailLogTypeEnum | string  | undefined) {
        this['log_type'] = logType;
    }
    public get logType(): InstanceLogConfigDetailLogTypeEnum | string | undefined {
        return this['log_type'];
    }
    public withLtsGroupId(ltsGroupId: string): InstanceLogConfigDetail {
        this['lts_group_id'] = ltsGroupId;
        return this;
    }
    public set ltsGroupId(ltsGroupId: string  | undefined) {
        this['lts_group_id'] = ltsGroupId;
    }
    public get ltsGroupId(): string | undefined {
        return this['lts_group_id'];
    }
    public withLtsStreamId(ltsStreamId: string): InstanceLogConfigDetail {
        this['lts_stream_id'] = ltsStreamId;
        return this;
    }
    public set ltsStreamId(ltsStreamId: string  | undefined) {
        this['lts_stream_id'] = ltsStreamId;
    }
    public get ltsStreamId(): string | undefined {
        return this['lts_stream_id'];
    }
    public withEnabled(enabled: boolean): InstanceLogConfigDetail {
        this['enabled'] = enabled;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum InstanceLogConfigDetailLogTypeEnum {
    SLOW_LOG = 'slow_log'
}
