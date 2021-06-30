

export class InstanceSpec {
    public clusterID: string;
    public version: string;
    public addonTemplateName: string;
    public addonTemplateType: string;
    public addonTemplateLogo?: string;
    public addonTemplateLabels?: Array<string>;
    public description: string;
    public values: { [key: string]: object; };
    public constructor(clusterID?: any, version?: any, addonTemplateName?: any, addonTemplateType?: any, description?: any, values?: any) { 
        this['clusterID'] = clusterID;
        this['version'] = version;
        this['addonTemplateName'] = addonTemplateName;
        this['addonTemplateType'] = addonTemplateType;
        this['description'] = description;
        this['values'] = values;
    }
    public withClusterID(clusterID: string): InstanceSpec {
        this['clusterID'] = clusterID;
        return this;
    }
    public withVersion(version: string): InstanceSpec {
        this['version'] = version;
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
    public withAddonTemplateLogo(addonTemplateLogo: string): InstanceSpec {
        this['addonTemplateLogo'] = addonTemplateLogo;
        return this;
    }
    public withAddonTemplateLabels(addonTemplateLabels: Array<string>): InstanceSpec {
        this['addonTemplateLabels'] = addonTemplateLabels;
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
}