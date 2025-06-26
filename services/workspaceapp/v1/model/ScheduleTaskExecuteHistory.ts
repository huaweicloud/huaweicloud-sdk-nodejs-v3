import { ScheduleTaskStatus } from './ScheduleTaskStatus';
import { ScheduleTaskTypeEnum } from './ScheduleTaskTypeEnum';
import { ScheduledTypeEnum } from './ScheduledTypeEnum';


export class ScheduleTaskExecuteHistory {
    public id?: string;
    private 'task_id'?: string;
    private 'task_type'?: ScheduleTaskTypeEnum;
    public status?: ScheduleTaskStatus;
    private 'scheduled_type'?: ScheduledTypeEnum;
    private 'total_count'?: number;
    private 'success_count'?: number;
    private 'failed_count'?: number;
    private 'excuting_count'?: number;
    private 'time_zone'?: string;
    private 'begin_time'?: Date;
    private 'end_time'?: Date;
    private 'create_time'?: Date;
    public constructor() { 
    }
    public withId(id: string): ScheduleTaskExecuteHistory {
        this['id'] = id;
        return this;
    }
    public withTaskId(taskId: string): ScheduleTaskExecuteHistory {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withTaskType(taskType: ScheduleTaskTypeEnum): ScheduleTaskExecuteHistory {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: ScheduleTaskTypeEnum  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): ScheduleTaskTypeEnum | undefined {
        return this['task_type'];
    }
    public withStatus(status: ScheduleTaskStatus): ScheduleTaskExecuteHistory {
        this['status'] = status;
        return this;
    }
    public withScheduledType(scheduledType: ScheduledTypeEnum): ScheduleTaskExecuteHistory {
        this['scheduled_type'] = scheduledType;
        return this;
    }
    public set scheduledType(scheduledType: ScheduledTypeEnum  | undefined) {
        this['scheduled_type'] = scheduledType;
    }
    public get scheduledType(): ScheduledTypeEnum | undefined {
        return this['scheduled_type'];
    }
    public withTotalCount(totalCount: number): ScheduleTaskExecuteHistory {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withSuccessCount(successCount: number): ScheduleTaskExecuteHistory {
        this['success_count'] = successCount;
        return this;
    }
    public set successCount(successCount: number  | undefined) {
        this['success_count'] = successCount;
    }
    public get successCount(): number | undefined {
        return this['success_count'];
    }
    public withFailedCount(failedCount: number): ScheduleTaskExecuteHistory {
        this['failed_count'] = failedCount;
        return this;
    }
    public set failedCount(failedCount: number  | undefined) {
        this['failed_count'] = failedCount;
    }
    public get failedCount(): number | undefined {
        return this['failed_count'];
    }
    public withExcutingCount(excutingCount: number): ScheduleTaskExecuteHistory {
        this['excuting_count'] = excutingCount;
        return this;
    }
    public set excutingCount(excutingCount: number  | undefined) {
        this['excuting_count'] = excutingCount;
    }
    public get excutingCount(): number | undefined {
        return this['excuting_count'];
    }
    public withTimeZone(timeZone: string): ScheduleTaskExecuteHistory {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
    public withBeginTime(beginTime: Date): ScheduleTaskExecuteHistory {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: Date  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): Date | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: Date): ScheduleTaskExecuteHistory {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: Date  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): Date | undefined {
        return this['end_time'];
    }
    public withCreateTime(createTime: Date): ScheduleTaskExecuteHistory {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
}