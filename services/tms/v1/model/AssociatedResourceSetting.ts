

export class AssociatedResourceSetting {
    private 'setting_name'?: string;
    private 'master_service'?: string;
    private 'master_resource_type'?: string;
    private 'associated_service'?: string;
    private 'associated_resource_type'?: string;
    private 'support_existing_resource'?: boolean;
    private 'support_auto_delete'?: boolean;
    private 'region_ids'?: Array<string>;
    public constructor() { 
    }
    public withSettingName(settingName: string): AssociatedResourceSetting {
        this['setting_name'] = settingName;
        return this;
    }
    public set settingName(settingName: string  | undefined) {
        this['setting_name'] = settingName;
    }
    public get settingName(): string | undefined {
        return this['setting_name'];
    }
    public withMasterService(masterService: string): AssociatedResourceSetting {
        this['master_service'] = masterService;
        return this;
    }
    public set masterService(masterService: string  | undefined) {
        this['master_service'] = masterService;
    }
    public get masterService(): string | undefined {
        return this['master_service'];
    }
    public withMasterResourceType(masterResourceType: string): AssociatedResourceSetting {
        this['master_resource_type'] = masterResourceType;
        return this;
    }
    public set masterResourceType(masterResourceType: string  | undefined) {
        this['master_resource_type'] = masterResourceType;
    }
    public get masterResourceType(): string | undefined {
        return this['master_resource_type'];
    }
    public withAssociatedService(associatedService: string): AssociatedResourceSetting {
        this['associated_service'] = associatedService;
        return this;
    }
    public set associatedService(associatedService: string  | undefined) {
        this['associated_service'] = associatedService;
    }
    public get associatedService(): string | undefined {
        return this['associated_service'];
    }
    public withAssociatedResourceType(associatedResourceType: string): AssociatedResourceSetting {
        this['associated_resource_type'] = associatedResourceType;
        return this;
    }
    public set associatedResourceType(associatedResourceType: string  | undefined) {
        this['associated_resource_type'] = associatedResourceType;
    }
    public get associatedResourceType(): string | undefined {
        return this['associated_resource_type'];
    }
    public withSupportExistingResource(supportExistingResource: boolean): AssociatedResourceSetting {
        this['support_existing_resource'] = supportExistingResource;
        return this;
    }
    public set supportExistingResource(supportExistingResource: boolean  | undefined) {
        this['support_existing_resource'] = supportExistingResource;
    }
    public get supportExistingResource(): boolean | undefined {
        return this['support_existing_resource'];
    }
    public withSupportAutoDelete(supportAutoDelete: boolean): AssociatedResourceSetting {
        this['support_auto_delete'] = supportAutoDelete;
        return this;
    }
    public set supportAutoDelete(supportAutoDelete: boolean  | undefined) {
        this['support_auto_delete'] = supportAutoDelete;
    }
    public get supportAutoDelete(): boolean | undefined {
        return this['support_auto_delete'];
    }
    public withRegionIds(regionIds: Array<string>): AssociatedResourceSetting {
        this['region_ids'] = regionIds;
        return this;
    }
    public set regionIds(regionIds: Array<string>  | undefined) {
        this['region_ids'] = regionIds;
    }
    public get regionIds(): Array<string> | undefined {
        return this['region_ids'];
    }
}