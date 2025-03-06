

export class CreateScheduleTaskRequestBody {
    private 'instance_ids'?: Array<string>;
    private 'start_time'?: string;
    private 'upgrade_type'?: CreateScheduleTaskRequestBodyUpgradeTypeEnum | string;
    private 'upgrade_action'?: CreateScheduleTaskRequestBodyUpgradeActionEnum | string;
    private 'target_version'?: string;
    public constructor(instanceIds?: Array<string>, startTime?: string, upgradeType?: string, upgradeAction?: string, targetVersion?: string) { 
        this['instance_ids'] = instanceIds;
        this['start_time'] = startTime;
        this['upgrade_type'] = upgradeType;
        this['upgrade_action'] = upgradeAction;
        this['target_version'] = targetVersion;
    }
    public withInstanceIds(instanceIds: Array<string>): CreateScheduleTaskRequestBody {
        this['instance_ids'] = instanceIds;
        return this;
    }
    public set instanceIds(instanceIds: Array<string>  | undefined) {
        this['instance_ids'] = instanceIds;
    }
    public get instanceIds(): Array<string> | undefined {
        return this['instance_ids'];
    }
    public withStartTime(startTime: string): CreateScheduleTaskRequestBody {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withUpgradeType(upgradeType: CreateScheduleTaskRequestBodyUpgradeTypeEnum | string): CreateScheduleTaskRequestBody {
        this['upgrade_type'] = upgradeType;
        return this;
    }
    public set upgradeType(upgradeType: CreateScheduleTaskRequestBodyUpgradeTypeEnum | string  | undefined) {
        this['upgrade_type'] = upgradeType;
    }
    public get upgradeType(): CreateScheduleTaskRequestBodyUpgradeTypeEnum | string | undefined {
        return this['upgrade_type'];
    }
    public withUpgradeAction(upgradeAction: CreateScheduleTaskRequestBodyUpgradeActionEnum | string): CreateScheduleTaskRequestBody {
        this['upgrade_action'] = upgradeAction;
        return this;
    }
    public set upgradeAction(upgradeAction: CreateScheduleTaskRequestBodyUpgradeActionEnum | string  | undefined) {
        this['upgrade_action'] = upgradeAction;
    }
    public get upgradeAction(): CreateScheduleTaskRequestBodyUpgradeActionEnum | string | undefined {
        return this['upgrade_action'];
    }
    public withTargetVersion(targetVersion: string): CreateScheduleTaskRequestBody {
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

/**
    * @export
    * @enum {string}
    */
export enum CreateScheduleTaskRequestBodyUpgradeTypeEnum {
    HOTFIX = 'hotfix'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateScheduleTaskRequestBodyUpgradeActionEnum {
    UPGRADEAUTOCOMMIT = 'upgradeAutoCommit'
}
