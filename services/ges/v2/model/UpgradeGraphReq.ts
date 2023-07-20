

export class UpgradeGraphReq {
    private 'upgrade_version'?: string;
    private 'force_upgrade'?: boolean;
    public constructor(upgradeVersion?: string) { 
        this['upgrade_version'] = upgradeVersion;
    }
    public withUpgradeVersion(upgradeVersion: string): UpgradeGraphReq {
        this['upgrade_version'] = upgradeVersion;
        return this;
    }
    public set upgradeVersion(upgradeVersion: string  | undefined) {
        this['upgrade_version'] = upgradeVersion;
    }
    public get upgradeVersion(): string | undefined {
        return this['upgrade_version'];
    }
    public withForceUpgrade(forceUpgrade: boolean): UpgradeGraphReq {
        this['force_upgrade'] = forceUpgrade;
        return this;
    }
    public set forceUpgrade(forceUpgrade: boolean  | undefined) {
        this['force_upgrade'] = forceUpgrade;
    }
    public get forceUpgrade(): boolean | undefined {
        return this['force_upgrade'];
    }
}