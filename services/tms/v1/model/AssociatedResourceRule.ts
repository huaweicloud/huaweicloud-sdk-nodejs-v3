

export class AssociatedResourceRule {
    private 'setting_name'?: string;
    private 'tag_keys'?: Array<string>;
    private 'existing_resource_status'?: string;
    private 'auto_delete_status'?: string;
    public status?: string;
    private 'region_id'?: string;
    public constructor(settingName?: string, regionId?: string) { 
        this['setting_name'] = settingName;
        this['region_id'] = regionId;
    }
    public withSettingName(settingName: string): AssociatedResourceRule {
        this['setting_name'] = settingName;
        return this;
    }
    public set settingName(settingName: string  | undefined) {
        this['setting_name'] = settingName;
    }
    public get settingName(): string | undefined {
        return this['setting_name'];
    }
    public withTagKeys(tagKeys: Array<string>): AssociatedResourceRule {
        this['tag_keys'] = tagKeys;
        return this;
    }
    public set tagKeys(tagKeys: Array<string>  | undefined) {
        this['tag_keys'] = tagKeys;
    }
    public get tagKeys(): Array<string> | undefined {
        return this['tag_keys'];
    }
    public withExistingResourceStatus(existingResourceStatus: string): AssociatedResourceRule {
        this['existing_resource_status'] = existingResourceStatus;
        return this;
    }
    public set existingResourceStatus(existingResourceStatus: string  | undefined) {
        this['existing_resource_status'] = existingResourceStatus;
    }
    public get existingResourceStatus(): string | undefined {
        return this['existing_resource_status'];
    }
    public withAutoDeleteStatus(autoDeleteStatus: string): AssociatedResourceRule {
        this['auto_delete_status'] = autoDeleteStatus;
        return this;
    }
    public set autoDeleteStatus(autoDeleteStatus: string  | undefined) {
        this['auto_delete_status'] = autoDeleteStatus;
    }
    public get autoDeleteStatus(): string | undefined {
        return this['auto_delete_status'];
    }
    public withStatus(status: string): AssociatedResourceRule {
        this['status'] = status;
        return this;
    }
    public withRegionId(regionId: string): AssociatedResourceRule {
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