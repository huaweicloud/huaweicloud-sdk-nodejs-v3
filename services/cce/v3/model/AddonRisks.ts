

export class AddonRisks {
    public addonTemplateName?: string;
    public alias?: string;
    public constructor() { 
    }
    public withAddonTemplateName(addonTemplateName: string): AddonRisks {
        this['addonTemplateName'] = addonTemplateName;
        return this;
    }
    public withAlias(alias: string): AddonRisks {
        this['alias'] = alias;
        return this;
    }
}