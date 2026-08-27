import { TaskApplyObjectInfo } from './TaskApplyObjectInfo';


export class CreateScheduledUpgradeTaskRequestBody {
    private 'task_name'?: string;
    private 'task_type'?: number;
    private 'scheduled_type'?: CreateScheduledUpgradeTaskRequestBodyScheduledTypeEnum | string;
    public timezone?: string;
    private 'week_list'?: string;
    private 'month_list'?: string;
    private 'date_list'?: string;
    private 'day_interval'?: number;
    private 'scheduled_date'?: string;
    private 'scheduled_time'?: string;
    private 'is_force_execute'?: number;
    private 'min_version'?: string;
    private 'target_version'?: string;
    private 'expire_enable'?: number;
    private 'expire_time'?: string;
    private 'is_notify'?: number;
    private 'extra_params'?: string;
    private 'execute_strategy'?: number;
    private 'grayscale_rule'?: number;
    private 'random_first_batch_count'?: number;
    private 'gray_object_ids'?: string;
    private 'gray_fail_threshold'?: number;
    private 'scheduled_end_time'?: string;
    private 'is_enable'?: number;
    public description?: string;
    private 'apply_objects'?: Array<TaskApplyObjectInfo>;
    public constructor(taskName?: string, taskType?: number, scheduledType?: string, timezone?: string, scheduledTime?: string, isForceExecute?: number, minVersion?: string, targetVersion?: string, expireEnable?: number, isNotify?: number, executeStrategy?: number, scheduledEndTime?: string, isEnable?: number) { 
        this['task_name'] = taskName;
        this['task_type'] = taskType;
        this['scheduled_type'] = scheduledType;
        this['timezone'] = timezone;
        this['scheduled_time'] = scheduledTime;
        this['is_force_execute'] = isForceExecute;
        this['min_version'] = minVersion;
        this['target_version'] = targetVersion;
        this['expire_enable'] = expireEnable;
        this['is_notify'] = isNotify;
        this['execute_strategy'] = executeStrategy;
        this['scheduled_end_time'] = scheduledEndTime;
        this['is_enable'] = isEnable;
    }
    public withTaskName(taskName: string): CreateScheduledUpgradeTaskRequestBody {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withTaskType(taskType: number): CreateScheduledUpgradeTaskRequestBody {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: number  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): number | undefined {
        return this['task_type'];
    }
    public withScheduledType(scheduledType: CreateScheduledUpgradeTaskRequestBodyScheduledTypeEnum | string): CreateScheduledUpgradeTaskRequestBody {
        this['scheduled_type'] = scheduledType;
        return this;
    }
    public set scheduledType(scheduledType: CreateScheduledUpgradeTaskRequestBodyScheduledTypeEnum | string  | undefined) {
        this['scheduled_type'] = scheduledType;
    }
    public get scheduledType(): CreateScheduledUpgradeTaskRequestBodyScheduledTypeEnum | string | undefined {
        return this['scheduled_type'];
    }
    public withTimezone(timezone: string): CreateScheduledUpgradeTaskRequestBody {
        this['timezone'] = timezone;
        return this;
    }
    public withWeekList(weekList: string): CreateScheduledUpgradeTaskRequestBody {
        this['week_list'] = weekList;
        return this;
    }
    public set weekList(weekList: string  | undefined) {
        this['week_list'] = weekList;
    }
    public get weekList(): string | undefined {
        return this['week_list'];
    }
    public withMonthList(monthList: string): CreateScheduledUpgradeTaskRequestBody {
        this['month_list'] = monthList;
        return this;
    }
    public set monthList(monthList: string  | undefined) {
        this['month_list'] = monthList;
    }
    public get monthList(): string | undefined {
        return this['month_list'];
    }
    public withDateList(dateList: string): CreateScheduledUpgradeTaskRequestBody {
        this['date_list'] = dateList;
        return this;
    }
    public set dateList(dateList: string  | undefined) {
        this['date_list'] = dateList;
    }
    public get dateList(): string | undefined {
        return this['date_list'];
    }
    public withDayInterval(dayInterval: number): CreateScheduledUpgradeTaskRequestBody {
        this['day_interval'] = dayInterval;
        return this;
    }
    public set dayInterval(dayInterval: number  | undefined) {
        this['day_interval'] = dayInterval;
    }
    public get dayInterval(): number | undefined {
        return this['day_interval'];
    }
    public withScheduledDate(scheduledDate: string): CreateScheduledUpgradeTaskRequestBody {
        this['scheduled_date'] = scheduledDate;
        return this;
    }
    public set scheduledDate(scheduledDate: string  | undefined) {
        this['scheduled_date'] = scheduledDate;
    }
    public get scheduledDate(): string | undefined {
        return this['scheduled_date'];
    }
    public withScheduledTime(scheduledTime: string): CreateScheduledUpgradeTaskRequestBody {
        this['scheduled_time'] = scheduledTime;
        return this;
    }
    public set scheduledTime(scheduledTime: string  | undefined) {
        this['scheduled_time'] = scheduledTime;
    }
    public get scheduledTime(): string | undefined {
        return this['scheduled_time'];
    }
    public withIsForceExecute(isForceExecute: number): CreateScheduledUpgradeTaskRequestBody {
        this['is_force_execute'] = isForceExecute;
        return this;
    }
    public set isForceExecute(isForceExecute: number  | undefined) {
        this['is_force_execute'] = isForceExecute;
    }
    public get isForceExecute(): number | undefined {
        return this['is_force_execute'];
    }
    public withMinVersion(minVersion: string): CreateScheduledUpgradeTaskRequestBody {
        this['min_version'] = minVersion;
        return this;
    }
    public set minVersion(minVersion: string  | undefined) {
        this['min_version'] = minVersion;
    }
    public get minVersion(): string | undefined {
        return this['min_version'];
    }
    public withTargetVersion(targetVersion: string): CreateScheduledUpgradeTaskRequestBody {
        this['target_version'] = targetVersion;
        return this;
    }
    public set targetVersion(targetVersion: string  | undefined) {
        this['target_version'] = targetVersion;
    }
    public get targetVersion(): string | undefined {
        return this['target_version'];
    }
    public withExpireEnable(expireEnable: number): CreateScheduledUpgradeTaskRequestBody {
        this['expire_enable'] = expireEnable;
        return this;
    }
    public set expireEnable(expireEnable: number  | undefined) {
        this['expire_enable'] = expireEnable;
    }
    public get expireEnable(): number | undefined {
        return this['expire_enable'];
    }
    public withExpireTime(expireTime: string): CreateScheduledUpgradeTaskRequestBody {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: string  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): string | undefined {
        return this['expire_time'];
    }
    public withIsNotify(isNotify: number): CreateScheduledUpgradeTaskRequestBody {
        this['is_notify'] = isNotify;
        return this;
    }
    public set isNotify(isNotify: number  | undefined) {
        this['is_notify'] = isNotify;
    }
    public get isNotify(): number | undefined {
        return this['is_notify'];
    }
    public withExtraParams(extraParams: string): CreateScheduledUpgradeTaskRequestBody {
        this['extra_params'] = extraParams;
        return this;
    }
    public set extraParams(extraParams: string  | undefined) {
        this['extra_params'] = extraParams;
    }
    public get extraParams(): string | undefined {
        return this['extra_params'];
    }
    public withExecuteStrategy(executeStrategy: number): CreateScheduledUpgradeTaskRequestBody {
        this['execute_strategy'] = executeStrategy;
        return this;
    }
    public set executeStrategy(executeStrategy: number  | undefined) {
        this['execute_strategy'] = executeStrategy;
    }
    public get executeStrategy(): number | undefined {
        return this['execute_strategy'];
    }
    public withGrayscaleRule(grayscaleRule: number): CreateScheduledUpgradeTaskRequestBody {
        this['grayscale_rule'] = grayscaleRule;
        return this;
    }
    public set grayscaleRule(grayscaleRule: number  | undefined) {
        this['grayscale_rule'] = grayscaleRule;
    }
    public get grayscaleRule(): number | undefined {
        return this['grayscale_rule'];
    }
    public withRandomFirstBatchCount(randomFirstBatchCount: number): CreateScheduledUpgradeTaskRequestBody {
        this['random_first_batch_count'] = randomFirstBatchCount;
        return this;
    }
    public set randomFirstBatchCount(randomFirstBatchCount: number  | undefined) {
        this['random_first_batch_count'] = randomFirstBatchCount;
    }
    public get randomFirstBatchCount(): number | undefined {
        return this['random_first_batch_count'];
    }
    public withGrayObjectIds(grayObjectIds: string): CreateScheduledUpgradeTaskRequestBody {
        this['gray_object_ids'] = grayObjectIds;
        return this;
    }
    public set grayObjectIds(grayObjectIds: string  | undefined) {
        this['gray_object_ids'] = grayObjectIds;
    }
    public get grayObjectIds(): string | undefined {
        return this['gray_object_ids'];
    }
    public withGrayFailThreshold(grayFailThreshold: number): CreateScheduledUpgradeTaskRequestBody {
        this['gray_fail_threshold'] = grayFailThreshold;
        return this;
    }
    public set grayFailThreshold(grayFailThreshold: number  | undefined) {
        this['gray_fail_threshold'] = grayFailThreshold;
    }
    public get grayFailThreshold(): number | undefined {
        return this['gray_fail_threshold'];
    }
    public withScheduledEndTime(scheduledEndTime: string): CreateScheduledUpgradeTaskRequestBody {
        this['scheduled_end_time'] = scheduledEndTime;
        return this;
    }
    public set scheduledEndTime(scheduledEndTime: string  | undefined) {
        this['scheduled_end_time'] = scheduledEndTime;
    }
    public get scheduledEndTime(): string | undefined {
        return this['scheduled_end_time'];
    }
    public withIsEnable(isEnable: number): CreateScheduledUpgradeTaskRequestBody {
        this['is_enable'] = isEnable;
        return this;
    }
    public set isEnable(isEnable: number  | undefined) {
        this['is_enable'] = isEnable;
    }
    public get isEnable(): number | undefined {
        return this['is_enable'];
    }
    public withDescription(description: string): CreateScheduledUpgradeTaskRequestBody {
        this['description'] = description;
        return this;
    }
    public withApplyObjects(applyObjects: Array<TaskApplyObjectInfo>): CreateScheduledUpgradeTaskRequestBody {
        this['apply_objects'] = applyObjects;
        return this;
    }
    public set applyObjects(applyObjects: Array<TaskApplyObjectInfo>  | undefined) {
        this['apply_objects'] = applyObjects;
    }
    public get applyObjects(): Array<TaskApplyObjectInfo> | undefined {
        return this['apply_objects'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateScheduledUpgradeTaskRequestBodyScheduledTypeEnum {
    FIXED_TIME = 'FIXED_TIME',
    DAY = 'DAY',
    WEEK = 'WEEK',
    MONTH = 'MONTH'
}
