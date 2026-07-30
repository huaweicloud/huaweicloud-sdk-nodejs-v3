

export class DeleteAssociatedResourceRuleRequest {
    private 'setting_name'?: string;
    private 'region_id'?: Array<string>;
    public constructor(settingName?: string, regionId?: Array<string>) { 
        this['setting_name'] = settingName;
        this['region_id'] = regionId;
    }
    public withSettingName(settingName: string): DeleteAssociatedResourceRuleRequest {
        this['setting_name'] = settingName;
        return this;
    }
    public set settingName(settingName: string  | undefined) {
        this['setting_name'] = settingName;
    }
    public get settingName(): string | undefined {
        return this['setting_name'];
    }
    public withRegionId(regionId: Array<string>): DeleteAssociatedResourceRuleRequest {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: Array<string>  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): Array<string> | undefined {
        return this['region_id'];
    }
}