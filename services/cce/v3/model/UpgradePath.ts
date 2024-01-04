

export class UpgradePath {
    public version?: string;
    public platformVersion?: string;
    public targetVersions?: Array<string>;
    public constructor() { 
    }
    public withVersion(version: string): UpgradePath {
        this['version'] = version;
        return this;
    }
    public withPlatformVersion(platformVersion: string): UpgradePath {
        this['platformVersion'] = platformVersion;
        return this;
    }
    public withTargetVersions(targetVersions: Array<string>): UpgradePath {
        this['targetVersions'] = targetVersions;
        return this;
    }
}