import { LtsLogType } from './LtsLogType';


export class UpdateLtsConfigRequestBodyLtsConfigs {
    private 'instance_id'?: string;
    private 'log_type'?: LtsLogType;
    private 'lts_group_id'?: string;
    private 'lts_stream_id'?: string;
    public constructor(instanceId?: string, logType?: LtsLogType, ltsGroupId?: string, ltsStreamId?: string) { 
        this['instance_id'] = instanceId;
        this['log_type'] = logType;
        this['lts_group_id'] = ltsGroupId;
        this['lts_stream_id'] = ltsStreamId;
    }
    public withInstanceId(instanceId: string): UpdateLtsConfigRequestBodyLtsConfigs {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withLogType(logType: LtsLogType): UpdateLtsConfigRequestBodyLtsConfigs {
        this['log_type'] = logType;
        return this;
    }
    public set logType(logType: LtsLogType  | undefined) {
        this['log_type'] = logType;
    }
    public get logType(): LtsLogType | undefined {
        return this['log_type'];
    }
    public withLtsGroupId(ltsGroupId: string): UpdateLtsConfigRequestBodyLtsConfigs {
        this['lts_group_id'] = ltsGroupId;
        return this;
    }
    public set ltsGroupId(ltsGroupId: string  | undefined) {
        this['lts_group_id'] = ltsGroupId;
    }
    public get ltsGroupId(): string | undefined {
        return this['lts_group_id'];
    }
    public withLtsStreamId(ltsStreamId: string): UpdateLtsConfigRequestBodyLtsConfigs {
        this['lts_stream_id'] = ltsStreamId;
        return this;
    }
    public set ltsStreamId(ltsStreamId: string  | undefined) {
        this['lts_stream_id'] = ltsStreamId;
    }
    public get ltsStreamId(): string | undefined {
        return this['lts_stream_id'];
    }
}