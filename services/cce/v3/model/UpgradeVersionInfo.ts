

export class UpgradeVersionInfo {
    public release?: string;
    public patch?: string;
    public suggestPatch?: string;
    public targetVersions?: Array<string>;
    public constructor() { 
    }
    public withRelease(release: string): UpgradeVersionInfo {
        this['release'] = release;
        return this;
    }
    public withPatch(patch: string): UpgradeVersionInfo {
        this['patch'] = patch;
        return this;
    }
    public withSuggestPatch(suggestPatch: string): UpgradeVersionInfo {
        this['suggestPatch'] = suggestPatch;
        return this;
    }
    public withTargetVersions(targetVersions: Array<string>): UpgradeVersionInfo {
        this['targetVersions'] = targetVersions;
        return this;
    }
}