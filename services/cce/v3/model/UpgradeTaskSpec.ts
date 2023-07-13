

export class UpgradeTaskSpec {
    public version?: string;
    public targetVersion?: string;
    public items?: object;
    public constructor() { 
    }
    public withVersion(version: string): UpgradeTaskSpec {
        this['version'] = version;
        return this;
    }
    public withTargetVersion(targetVersion: string): UpgradeTaskSpec {
        this['targetVersion'] = targetVersion;
        return this;
    }
    public withItems(items: object): UpgradeTaskSpec {
        this['items'] = items;
        return this;
    }
}