

export class UpgradeFederationRequestBody {
    public targetVersion?: string;
    public constructor() { 
    }
    public withTargetVersion(targetVersion: string): UpgradeFederationRequestBody {
        this['targetVersion'] = targetVersion;
        return this;
    }
}