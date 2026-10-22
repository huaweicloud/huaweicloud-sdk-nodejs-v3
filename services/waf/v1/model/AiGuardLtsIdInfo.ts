

export class AiGuardLtsIdInfo {
    private 'lts_access_stream_id'?: string;
    private 'lts_group_id'?: string;
    public constructor() { 
    }
    public withLtsAccessStreamId(ltsAccessStreamId: string): AiGuardLtsIdInfo {
        this['lts_access_stream_id'] = ltsAccessStreamId;
        return this;
    }
    public set ltsAccessStreamId(ltsAccessStreamId: string  | undefined) {
        this['lts_access_stream_id'] = ltsAccessStreamId;
    }
    public get ltsAccessStreamId(): string | undefined {
        return this['lts_access_stream_id'];
    }
    public withLtsGroupId(ltsGroupId: string): AiGuardLtsIdInfo {
        this['lts_group_id'] = ltsGroupId;
        return this;
    }
    public set ltsGroupId(ltsGroupId: string  | undefined) {
        this['lts_group_id'] = ltsGroupId;
    }
    public get ltsGroupId(): string | undefined {
        return this['lts_group_id'];
    }
}