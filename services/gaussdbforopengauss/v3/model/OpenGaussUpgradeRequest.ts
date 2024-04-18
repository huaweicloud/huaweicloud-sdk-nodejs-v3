

export class OpenGaussUpgradeRequest {
    private 'upgrade_type'?: string;
    private 'upgrade_action'?: string;
    private 'target_version'?: string;
    private 'upgrade_shard_num'?: number;
    private 'upgrade_az'?: string;
    public constructor(upgradeType?: string) { 
        this['upgrade_type'] = upgradeType;
    }
    public withUpgradeType(upgradeType: string): OpenGaussUpgradeRequest {
        this['upgrade_type'] = upgradeType;
        return this;
    }
    public set upgradeType(upgradeType: string  | undefined) {
        this['upgrade_type'] = upgradeType;
    }
    public get upgradeType(): string | undefined {
        return this['upgrade_type'];
    }
    public withUpgradeAction(upgradeAction: string): OpenGaussUpgradeRequest {
        this['upgrade_action'] = upgradeAction;
        return this;
    }
    public set upgradeAction(upgradeAction: string  | undefined) {
        this['upgrade_action'] = upgradeAction;
    }
    public get upgradeAction(): string | undefined {
        return this['upgrade_action'];
    }
    public withTargetVersion(targetVersion: string): OpenGaussUpgradeRequest {
        this['target_version'] = targetVersion;
        return this;
    }
    public set targetVersion(targetVersion: string  | undefined) {
        this['target_version'] = targetVersion;
    }
    public get targetVersion(): string | undefined {
        return this['target_version'];
    }
    public withUpgradeShardNum(upgradeShardNum: number): OpenGaussUpgradeRequest {
        this['upgrade_shard_num'] = upgradeShardNum;
        return this;
    }
    public set upgradeShardNum(upgradeShardNum: number  | undefined) {
        this['upgrade_shard_num'] = upgradeShardNum;
    }
    public get upgradeShardNum(): number | undefined {
        return this['upgrade_shard_num'];
    }
    public withUpgradeAz(upgradeAz: string): OpenGaussUpgradeRequest {
        this['upgrade_az'] = upgradeAz;
        return this;
    }
    public set upgradeAz(upgradeAz: string  | undefined) {
        this['upgrade_az'] = upgradeAz;
    }
    public get upgradeAz(): string | undefined {
        return this['upgrade_az'];
    }
}