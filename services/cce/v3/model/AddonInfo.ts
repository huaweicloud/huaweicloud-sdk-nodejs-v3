

export class AddonInfo {
    public addonTemplateName?: string;
    public addonInstanceID?: string;
    public targetVersion?: string;
    public type?: AddonInfoTypeEnum | string;
    public values?: { [key: string]: object; };
    public constructor(addonTemplateName?: string, addonInstanceID?: string, type?: string) { 
        this['addonTemplateName'] = addonTemplateName;
        this['addonInstanceID'] = addonInstanceID;
        this['type'] = type;
    }
    public withAddonTemplateName(addonTemplateName: string): AddonInfo {
        this['addonTemplateName'] = addonTemplateName;
        return this;
    }
    public withAddonInstanceID(addonInstanceID: string): AddonInfo {
        this['addonInstanceID'] = addonInstanceID;
        return this;
    }
    public withTargetVersion(targetVersion: string): AddonInfo {
        this['targetVersion'] = targetVersion;
        return this;
    }
    public withType(type: AddonInfoTypeEnum | string): AddonInfo {
        this['type'] = type;
        return this;
    }
    public withValues(values: { [key: string]: object; }): AddonInfo {
        this['values'] = values;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AddonInfoTypeEnum {
    ADDONSTATIC = 'addonStatic',
    ADDONUPGRADE = 'addonUpgrade'
}
