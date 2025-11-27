import { ReleaseParams } from './ReleaseParams';


export class AddonInstanceSpec {
    public clusterID?: string;
    public version?: string;
    public addonTemplateName?: string;
    public addonTemplateType?: string;
    public addonTemplateLogo?: string;
    public addonTemplateLabels?: Array<string>;
    public description?: string;
    public values?: { [key: string]: object; };
    public parameters?: ReleaseParams;
    public namespace?: string;
    public constructor() { 
    }
    public withClusterID(clusterID: string): AddonInstanceSpec {
        this['clusterID'] = clusterID;
        return this;
    }
    public withVersion(version: string): AddonInstanceSpec {
        this['version'] = version;
        return this;
    }
    public withAddonTemplateName(addonTemplateName: string): AddonInstanceSpec {
        this['addonTemplateName'] = addonTemplateName;
        return this;
    }
    public withAddonTemplateType(addonTemplateType: string): AddonInstanceSpec {
        this['addonTemplateType'] = addonTemplateType;
        return this;
    }
    public withAddonTemplateLogo(addonTemplateLogo: string): AddonInstanceSpec {
        this['addonTemplateLogo'] = addonTemplateLogo;
        return this;
    }
    public withAddonTemplateLabels(addonTemplateLabels: Array<string>): AddonInstanceSpec {
        this['addonTemplateLabels'] = addonTemplateLabels;
        return this;
    }
    public withDescription(description: string): AddonInstanceSpec {
        this['description'] = description;
        return this;
    }
    public withValues(values: { [key: string]: object; }): AddonInstanceSpec {
        this['values'] = values;
        return this;
    }
    public withParameters(parameters: ReleaseParams): AddonInstanceSpec {
        this['parameters'] = parameters;
        return this;
    }
    public withNamespace(namespace: string): AddonInstanceSpec {
        this['namespace'] = namespace;
        return this;
    }
}