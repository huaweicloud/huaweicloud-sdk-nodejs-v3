

export class UpgradingTheKernelBody {
    private 'target_image_id'?: string;
    private 'upgrade_type'?: UpgradingTheKernelBodyUpgradeTypeEnum | string;
    private 'indices_backup_check'?: boolean;
    public agency?: string;
    private 'cluster_load_check'?: boolean;
    private 'batch_size'?: number;
    public constructor(targetImageId?: string, upgradeType?: string, indicesBackupCheck?: boolean, agency?: string) { 
        this['target_image_id'] = targetImageId;
        this['upgrade_type'] = upgradeType;
        this['indices_backup_check'] = indicesBackupCheck;
        this['agency'] = agency;
    }
    public withTargetImageId(targetImageId: string): UpgradingTheKernelBody {
        this['target_image_id'] = targetImageId;
        return this;
    }
    public set targetImageId(targetImageId: string  | undefined) {
        this['target_image_id'] = targetImageId;
    }
    public get targetImageId(): string | undefined {
        return this['target_image_id'];
    }
    public withUpgradeType(upgradeType: UpgradingTheKernelBodyUpgradeTypeEnum | string): UpgradingTheKernelBody {
        this['upgrade_type'] = upgradeType;
        return this;
    }
    public set upgradeType(upgradeType: UpgradingTheKernelBodyUpgradeTypeEnum | string  | undefined) {
        this['upgrade_type'] = upgradeType;
    }
    public get upgradeType(): UpgradingTheKernelBodyUpgradeTypeEnum | string | undefined {
        return this['upgrade_type'];
    }
    public withIndicesBackupCheck(indicesBackupCheck: boolean): UpgradingTheKernelBody {
        this['indices_backup_check'] = indicesBackupCheck;
        return this;
    }
    public set indicesBackupCheck(indicesBackupCheck: boolean  | undefined) {
        this['indices_backup_check'] = indicesBackupCheck;
    }
    public get indicesBackupCheck(): boolean | undefined {
        return this['indices_backup_check'];
    }
    public withAgency(agency: string): UpgradingTheKernelBody {
        this['agency'] = agency;
        return this;
    }
    public withClusterLoadCheck(clusterLoadCheck: boolean): UpgradingTheKernelBody {
        this['cluster_load_check'] = clusterLoadCheck;
        return this;
    }
    public set clusterLoadCheck(clusterLoadCheck: boolean  | undefined) {
        this['cluster_load_check'] = clusterLoadCheck;
    }
    public get clusterLoadCheck(): boolean | undefined {
        return this['cluster_load_check'];
    }
    public withBatchSize(batchSize: number): UpgradingTheKernelBody {
        this['batch_size'] = batchSize;
        return this;
    }
    public set batchSize(batchSize: number  | undefined) {
        this['batch_size'] = batchSize;
    }
    public get batchSize(): number | undefined {
        return this['batch_size'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpgradingTheKernelBodyUpgradeTypeEnum {
    SAME = 'same',
    CROSS = 'cross'
}
