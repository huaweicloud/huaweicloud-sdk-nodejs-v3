

export class LtsConfigRequestAndResponseLtsIdInfo {
    private 'lts_group_id'?: string;
    private 'lts_attack_stream_id'?: string;
    public constructor() { 
    }
    public withLtsGroupId(ltsGroupId: string): LtsConfigRequestAndResponseLtsIdInfo {
        this['lts_group_id'] = ltsGroupId;
        return this;
    }
    public set ltsGroupId(ltsGroupId: string  | undefined) {
        this['lts_group_id'] = ltsGroupId;
    }
    public get ltsGroupId(): string | undefined {
        return this['lts_group_id'];
    }
    public withLtsAttackStreamId(ltsAttackStreamId: string): LtsConfigRequestAndResponseLtsIdInfo {
        this['lts_attack_stream_id'] = ltsAttackStreamId;
        return this;
    }
    public set ltsAttackStreamId(ltsAttackStreamId: string  | undefined) {
        this['lts_attack_stream_id'] = ltsAttackStreamId;
    }
    public get ltsAttackStreamId(): string | undefined {
        return this['lts_attack_stream_id'];
    }
}