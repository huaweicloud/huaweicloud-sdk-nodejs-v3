

export class UpgradingTheKernelBody {
    private 'target_image_id'?: string;
    private 'upgrade_type'?: UpgradingTheKernelBodyUpgradeTypeEnum | string;
    private 'indices_backup_check'?: boolean;
    public agency?: string;
    private 'check_load'?: boolean;
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
    public withCheckLoad(checkLoad: boolean): UpgradingTheKernelBody {
        this['check_load'] = checkLoad;
        return this;
    }
    public set checkLoad(checkLoad: boolean  | undefined) {
        this['check_load'] = checkLoad;
    }
    public get checkLoad(): boolean | undefined {
        return this['check_load'];
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
