

export class InstanceSpec {
    public addonTemplateLabels?: Array<string>;
    public addonTemplateLogo?: string;
    public addonTemplateName: string;
    public addonTemplateType: string;
    public clusterID: string;
    public description: string;
    public values: { [key: string]: object; };
    public version: string;
    public constructor(addonTemplateName?: any, addonTemplateType?: any, clusterID?: any, description?: any, values?: any, version?: any) { 
        this['addonTemplateName'] = addonTemplateName;
        this['addonTemplateType'] = addonTemplateType;
        this['clusterID'] = clusterID;
        this['description'] = description;
        this['values'] = values;
        this['version'] = version;
    }
    public withAddonTemplateLabels(addonTemplateLabels: Array<string>): InstanceSpec {
        this['addonTemplateLabels'] = addonTemplateLabels;
        return this;
    }
    public withAddonTemplateLogo(addonTemplateLogo: string): InstanceSpec {
        this['addonTemplateLogo'] = addonTemplateLogo;
        return this;
    }
    public withAddonTemplateName(addonTemplateName: string): InstanceSpec {
        this['addonTemplateName'] = addonTemplateName;
        return this;
    }
    public withAddonTemplateType(addonTemplateType: string): InstanceSpec {
        this['addonTemplateType'] = addonTemplateType;
        return this;
    }
    public withClusterID(clusterID: string): InstanceSpec {
        this['clusterID'] = clusterID;
        return this;
    }
    public withDescription(description: string): InstanceSpec {
        this['description'] = description;
        return this;
    }
    public withValues(values: { [key: string]: object; }): InstanceSpec {
        this['values'] = values;
        return this;
    }
    public withVersion(version: string): InstanceSpec {
        this['version'] = version;
        return this;
    }
}