

export class UpgradeAddonConfig {
    public addonTemplateName?: string;
    public operation?: string;
    public version?: string;
    public values?: object;
    public constructor(addonTemplateName?: string, operation?: string, version?: string) { 
        this['addonTemplateName'] = addonTemplateName;
        this['operation'] = operation;
        this['version'] = version;
    }
    public withAddonTemplateName(addonTemplateName: string): UpgradeAddonConfig {
        this['addonTemplateName'] = addonTemplateName;
        return this;
    }
    public withOperation(operation: string): UpgradeAddonConfig {
        this['operation'] = operation;
        return this;
    }
    public withVersion(version: string): UpgradeAddonConfig {
        this['version'] = version;
        return this;
    }
    public withValues(values: object): UpgradeAddonConfig {
        this['values'] = values;
        return this;
    }
}