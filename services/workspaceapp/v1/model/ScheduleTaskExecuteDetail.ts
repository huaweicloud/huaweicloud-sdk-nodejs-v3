import { ScheduleTaskStatus } from './ScheduleTaskStatus';
import { ScheduleTaskTypeEnum } from './ScheduleTaskTypeEnum';


export class ScheduleTaskExecuteDetail {
    public id?: string;
    private 'execute_id'?: string;
    private 'server_id'?: string;
    private 'server_name'?: string;
    public status?: ScheduleTaskStatus;
    private 'task_type'?: ScheduleTaskTypeEnum;
    private 'time_zone'?: string;
    private 'begin_time'?: Date;
    private 'end_time'?: Date;
    private 'result_code'?: string;
    private 'result_message'?: string;
    public constructor() { 
    }
    public withId(id: string): ScheduleTaskExecuteDetail {
        this['id'] = id;
        return this;
    }
    public withExecuteId(executeId: string): ScheduleTaskExecuteDetail {
        this['execute_id'] = executeId;
        return this;
    }
    public set executeId(executeId: string  | undefined) {
        this['execute_id'] = executeId;
    }
    public get executeId(): string | undefined {
        return this['execute_id'];
    }
    public withServerId(serverId: string): ScheduleTaskExecuteDetail {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withServerName(serverName: string): ScheduleTaskExecuteDetail {
        this['server_name'] = serverName;
        return this;
    }
    public set serverName(serverName: string  | undefined) {
        this['server_name'] = serverName;
    }
    public get serverName(): string | undefined {
        return this['server_name'];
    }
    public withStatus(status: ScheduleTaskStatus): ScheduleTaskExecuteDetail {
        this['status'] = status;
        return this;
    }
    public withTaskType(taskType: ScheduleTaskTypeEnum): ScheduleTaskExecuteDetail {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: ScheduleTaskTypeEnum  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): ScheduleTaskTypeEnum | undefined {
        return this['task_type'];
    }
    public withTimeZone(timeZone: string): ScheduleTaskExecuteDetail {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
    public withBeginTime(beginTime: Date): ScheduleTaskExecuteDetail {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: Date  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): Date | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: Date): ScheduleTaskExecuteDetail {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: Date  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): Date | undefined {
        return this['end_time'];
    }
    public withResultCode(resultCode: string): ScheduleTaskExecuteDetail {
        this['result_code'] = resultCode;
        return this;
    }
    public set resultCode(resultCode: string  | undefined) {
        this['result_code'] = resultCode;
    }
    public get resultCode(): string | undefined {
        return this['result_code'];
    }
    public withResultMessage(resultMessage: string): ScheduleTaskExecuteDetail {
        this['result_message'] = resultMessage;
        return this;
    }
    public set resultMessage(resultMessage: string  | undefined) {
        this['result_message'] = resultMessage;
    }
    public get resultMessage(): string | undefined {
        return this['result_message'];
    }
}