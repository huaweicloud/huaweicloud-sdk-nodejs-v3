

export class ModifyRecyclePolicyReq {
    private 'retention_days'?: number;
    private 'default_use_recycle'?: boolean;
    public constructor() { 
    }
    public withRetentionDays(retentionDays: number): ModifyRecyclePolicyReq {
        this['retention_days'] = retentionDays;
        return this;
    }
    public set retentionDays(retentionDays: number  | undefined) {
        this['retention_days'] = retentionDays;
    }
    public get retentionDays(): number | undefined {
        return this['retention_days'];
    }
    public withDefaultUseRecycle(defaultUseRecycle: boolean): ModifyRecyclePolicyReq {
        this['default_use_recycle'] = defaultUseRecycle;
        return this;
    }
    public set defaultUseRecycle(defaultUseRecycle: boolean  | undefined) {
        this['default_use_recycle'] = defaultUseRecycle;
    }
    public get defaultUseRecycle(): boolean | undefined {
        return this['default_use_recycle'];
    }
}