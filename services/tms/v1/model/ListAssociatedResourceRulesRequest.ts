

export class ListAssociatedResourceRulesRequest {
    public limit?: number;
    public marker?: string;
    private 'setting_name'?: string;
    private 'region_id'?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListAssociatedResourceRulesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListAssociatedResourceRulesRequest {
        this['marker'] = marker;
        return this;
    }
    public withSettingName(settingName: string): ListAssociatedResourceRulesRequest {
        this['setting_name'] = settingName;
        return this;
    }
    public set settingName(settingName: string  | undefined) {
        this['setting_name'] = settingName;
    }
    public get settingName(): string | undefined {
        return this['setting_name'];
    }
    public withRegionId(regionId: string): ListAssociatedResourceRulesRequest {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
}