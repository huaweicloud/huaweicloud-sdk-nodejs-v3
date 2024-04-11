

export class OpenGaussUpgradeRequest {
    private 'upgrade_type'?: string;
    private 'upgrde_action'?: string;
    private 'target_version'?: string;
    private 'upgrade_shard_num'?: number;
    private 'upgrade_az'?: string;
    private 'is_parallel_upgrade'?: boolean;
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
    public withUpgrdeAction(upgrdeAction: string): OpenGaussUpgradeRequest {
        this['upgrde_action'] = upgrdeAction;
        return this;
    }
    public set upgrdeAction(upgrdeAction: string  | undefined) {
        this['upgrde_action'] = upgrdeAction;
    }
    public get upgrdeAction(): string | undefined {
        return this['upgrde_action'];
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
    public withIsParallelUpgrade(isParallelUpgrade: boolean): OpenGaussUpgradeRequest {
        this['is_parallel_upgrade'] = isParallelUpgrade;
        return this;
    }
    public set isParallelUpgrade(isParallelUpgrade: boolean  | undefined) {
        this['is_parallel_upgrade'] = isParallelUpgrade;
    }
    public get isParallelUpgrade(): boolean | undefined {
        return this['is_parallel_upgrade'];
    }
}