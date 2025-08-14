

export class UpdatePreBootPolicyReq {
    public ids?: Array<string>;
    private 'is_pre_boot'?: boolean;
    public constructor(ids?: Array<string>, isPreBoot?: boolean) { 
        this['ids'] = ids;
        this['is_pre_boot'] = isPreBoot;
    }
    public withIds(ids: Array<string>): UpdatePreBootPolicyReq {
        this['ids'] = ids;
        return this;
    }
    public withIsPreBoot(isPreBoot: boolean): UpdatePreBootPolicyReq {
        this['is_pre_boot'] = isPreBoot;
        return this;
    }
    public set isPreBoot(isPreBoot: boolean  | undefined) {
        this['is_pre_boot'] = isPreBoot;
    }
    public get isPreBoot(): boolean | undefined {
        return this['is_pre_boot'];
    }
}