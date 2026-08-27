

export class UpgradeScheduledTaskVO {
    public id?: string;
    private 'task_name'?: string;
    private 'task_type'?: number;
    private 'scheduled_type'?: UpgradeScheduledTaskVOScheduledTypeEnum | string;
    public timezone?: string;
    private 'last_execute_status'?: string;
    private 'next_execute_time'?: string;
    private 'is_enable'?: number;
    private 'target_version'?: string;
    private 'execute_strategy'?: number;
    public description?: string;
    public constructor() { 
    }
    public withId(id: string): UpgradeScheduledTaskVO {
        this['id'] = id;
        return this;
    }
    public withTaskName(taskName: string): UpgradeScheduledTaskVO {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withTaskType(taskType: number): UpgradeScheduledTaskVO {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: number  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): number | undefined {
        return this['task_type'];
    }
    public withScheduledType(scheduledType: UpgradeScheduledTaskVOScheduledTypeEnum | string): UpgradeScheduledTaskVO {
        this['scheduled_type'] = scheduledType;
        return this;
    }
    public set scheduledType(scheduledType: UpgradeScheduledTaskVOScheduledTypeEnum | string  | undefined) {
        this['scheduled_type'] = scheduledType;
    }
    public get scheduledType(): UpgradeScheduledTaskVOScheduledTypeEnum | string | undefined {
        return this['scheduled_type'];
    }
    public withTimezone(timezone: string): UpgradeScheduledTaskVO {
        this['timezone'] = timezone;
        return this;
    }
    public withLastExecuteStatus(lastExecuteStatus: string): UpgradeScheduledTaskVO {
        this['last_execute_status'] = lastExecuteStatus;
        return this;
    }
    public set lastExecuteStatus(lastExecuteStatus: string  | undefined) {
        this['last_execute_status'] = lastExecuteStatus;
    }
    public get lastExecuteStatus(): string | undefined {
        return this['last_execute_status'];
    }
    public withNextExecuteTime(nextExecuteTime: string): UpgradeScheduledTaskVO {
        this['next_execute_time'] = nextExecuteTime;
        return this;
    }
    public set nextExecuteTime(nextExecuteTime: string  | undefined) {
        this['next_execute_time'] = nextExecuteTime;
    }
    public get nextExecuteTime(): string | undefined {
        return this['next_execute_time'];
    }
    public withIsEnable(isEnable: number): UpgradeScheduledTaskVO {
        this['is_enable'] = isEnable;
        return this;
    }
    public set isEnable(isEnable: number  | undefined) {
        this['is_enable'] = isEnable;
    }
    public get isEnable(): number | undefined {
        return this['is_enable'];
    }
    public withTargetVersion(targetVersion: string): UpgradeScheduledTaskVO {
        this['target_version'] = targetVersion;
        return this;
    }
    public set targetVersion(targetVersion: string  | undefined) {
        this['target_version'] = targetVersion;
    }
    public get targetVersion(): string | undefined {
        return this['target_version'];
    }
    public withExecuteStrategy(executeStrategy: number): UpgradeScheduledTaskVO {
        this['execute_strategy'] = executeStrategy;
        return this;
    }
    public set executeStrategy(executeStrategy: number  | undefined) {
        this['execute_strategy'] = executeStrategy;
    }
    public get executeStrategy(): number | undefined {
        return this['execute_strategy'];
    }
    public withDescription(description: string): UpgradeScheduledTaskVO {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpgradeScheduledTaskVOScheduledTypeEnum {
    FIXED_TIME = 'FIXED_TIME',
    DAY = 'DAY',
    WEEK = 'WEEK',
    MONTH = 'MONTH'
}
