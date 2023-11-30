

export class UpgradePgMajorVersion {
    private 'target_version'?: string;
    private 'is_change_private_ip'?: boolean;
    private 'statistics_collection_mode'?: string;
    public constructor(targetVersion?: string, isChangePrivateIp?: boolean) { 
        this['target_version'] = targetVersion;
        this['is_change_private_ip'] = isChangePrivateIp;
    }
    public withTargetVersion(targetVersion: string): UpgradePgMajorVersion {
        this['target_version'] = targetVersion;
        return this;
    }
    public set targetVersion(targetVersion: string  | undefined) {
        this['target_version'] = targetVersion;
    }
    public get targetVersion(): string | undefined {
        return this['target_version'];
    }
    public withIsChangePrivateIp(isChangePrivateIp: boolean): UpgradePgMajorVersion {
        this['is_change_private_ip'] = isChangePrivateIp;
        return this;
    }
    public set isChangePrivateIp(isChangePrivateIp: boolean  | undefined) {
        this['is_change_private_ip'] = isChangePrivateIp;
    }
    public get isChangePrivateIp(): boolean | undefined {
        return this['is_change_private_ip'];
    }
    public withStatisticsCollectionMode(statisticsCollectionMode: string): UpgradePgMajorVersion {
        this['statistics_collection_mode'] = statisticsCollectionMode;
        return this;
    }
    public set statisticsCollectionMode(statisticsCollectionMode: string  | undefined) {
        this['statistics_collection_mode'] = statisticsCollectionMode;
    }
    public get statisticsCollectionMode(): string | undefined {
        return this['statistics_collection_mode'];
    }
}