

export class UpdateLtsConfigRequestBodyLtsIdInfo {
    private 'eps_id'?: string;
    public region?: string;
    private 'lts_group_id'?: string;
    private 'lts_attack_stream_id'?: string;
    public constructor(epsId?: string, region?: string, ltsGroupId?: string, ltsAttackStreamId?: string) { 
        this['eps_id'] = epsId;
        this['region'] = region;
        this['lts_group_id'] = ltsGroupId;
        this['lts_attack_stream_id'] = ltsAttackStreamId;
    }
    public withEpsId(epsId: string): UpdateLtsConfigRequestBodyLtsIdInfo {
        this['eps_id'] = epsId;
        return this;
    }
    public set epsId(epsId: string  | undefined) {
        this['eps_id'] = epsId;
    }
    public get epsId(): string | undefined {
        return this['eps_id'];
    }
    public withRegion(region: string): UpdateLtsConfigRequestBodyLtsIdInfo {
        this['region'] = region;
        return this;
    }
    public withLtsGroupId(ltsGroupId: string): UpdateLtsConfigRequestBodyLtsIdInfo {
        this['lts_group_id'] = ltsGroupId;
        return this;
    }
    public set ltsGroupId(ltsGroupId: string  | undefined) {
        this['lts_group_id'] = ltsGroupId;
    }
    public get ltsGroupId(): string | undefined {
        return this['lts_group_id'];
    }
    public withLtsAttackStreamId(ltsAttackStreamId: string): UpdateLtsConfigRequestBodyLtsIdInfo {
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