

export class RdsUpgradePrecheckV3Req {
    private 'target_version'?: string;
    public constructor() { 
    }
    public withTargetVersion(targetVersion: string): RdsUpgradePrecheckV3Req {
        this['target_version'] = targetVersion;
        return this;
    }
    public set targetVersion(targetVersion: string  | undefined) {
        this['target_version'] = targetVersion;
    }
    public get targetVersion(): string | undefined {
        return this['target_version'];
    }
}