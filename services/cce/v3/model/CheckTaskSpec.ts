

export class CheckTaskSpec {
    public addonTargetVersion?: string;
    public constructor() { 
    }
    public withAddonTargetVersion(addonTargetVersion: string): CheckTaskSpec {
        this['addonTargetVersion'] = addonTargetVersion;
        return this;
    }
}