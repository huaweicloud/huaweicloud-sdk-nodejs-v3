import { LtsLogType } from './LtsLogType';


export class ListLtsLogPolicyRespondBodyLtsConfigs {
    private 'log_type'?: LtsLogType;
    private 'lts_group_id'?: string;
    private 'lts_stream_id'?: string;
    public enabled?: boolean;
    public constructor() { 
    }
    public withLogType(logType: LtsLogType): ListLtsLogPolicyRespondBodyLtsConfigs {
        this['log_type'] = logType;
        return this;
    }
    public set logType(logType: LtsLogType  | undefined) {
        this['log_type'] = logType;
    }
    public get logType(): LtsLogType | undefined {
        return this['log_type'];
    }
    public withLtsGroupId(ltsGroupId: string): ListLtsLogPolicyRespondBodyLtsConfigs {
        this['lts_group_id'] = ltsGroupId;
        return this;
    }
    public set ltsGroupId(ltsGroupId: string  | undefined) {
        this['lts_group_id'] = ltsGroupId;
    }
    public get ltsGroupId(): string | undefined {
        return this['lts_group_id'];
    }
    public withLtsStreamId(ltsStreamId: string): ListLtsLogPolicyRespondBodyLtsConfigs {
        this['lts_stream_id'] = ltsStreamId;
        return this;
    }
    public set ltsStreamId(ltsStreamId: string  | undefined) {
        this['lts_stream_id'] = ltsStreamId;
    }
    public get ltsStreamId(): string | undefined {
        return this['lts_stream_id'];
    }
    public withEnabled(enabled: boolean): ListLtsLogPolicyRespondBodyLtsConfigs {
        this['enabled'] = enabled;
        return this;
    }
}