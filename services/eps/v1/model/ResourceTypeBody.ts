

export class ResourceTypeBody {
    private 'resource_type': string | undefined;
    private 'resource_type_i18n_display_name': string | undefined;
    public regions: Array<string>;
    public global: boolean;
    public constructor(resourceType?: any, resourceTypeI18nDisplayName?: any, regions?: any, global?: any) { 
        this['resource_type'] = resourceType;
        this['resource_type_i18n_display_name'] = resourceTypeI18nDisplayName;
        this['regions'] = regions;
        this['global'] = global;
    }
    public withResourceType(resourceType: string): ResourceTypeBody {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
    public withResourceTypeI18nDisplayName(resourceTypeI18nDisplayName: string): ResourceTypeBody {
        this['resource_type_i18n_display_name'] = resourceTypeI18nDisplayName;
        return this;
    }
    public set resourceTypeI18nDisplayName(resourceTypeI18nDisplayName: string | undefined) {
        this['resource_type_i18n_display_name'] = resourceTypeI18nDisplayName;
    }
    public get resourceTypeI18nDisplayName() {
        return this['resource_type_i18n_display_name'];
    }
    public withRegions(regions: Array<string>): ResourceTypeBody {
        this['regions'] = regions;
        return this;
    }
    public withGlobal(global: boolean): ResourceTypeBody {
        this['global'] = global;
        return this;
    }
}