

export class InstanceRequestSpec {
    public addonTemplateName: string;
    public clusterID: string;
    public values: { [key: string]: object; };
    public version: string;
    public constructor(addonTemplateName?: any, clusterID?: any, values?: any, version?: any) { 
        this['addonTemplateName'] = addonTemplateName;
        this['clusterID'] = clusterID;
        this['values'] = values;
        this['version'] = version;
    }
    public withAddonTemplateName(addonTemplateName: string): InstanceRequestSpec {
        this['addonTemplateName'] = addonTemplateName;
        return this;
    }
    public withClusterID(clusterID: string): InstanceRequestSpec {
        this['clusterID'] = clusterID;
        return this;
    }
    public withValues(values: { [key: string]: object; }): InstanceRequestSpec {
        this['values'] = values;
        return this;
    }
    public withVersion(version: string): InstanceRequestSpec {
        this['version'] = version;
        return this;
    }
}