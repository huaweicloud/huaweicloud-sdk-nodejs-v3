import { SubTaskInfoDTO } from './SubTaskInfoDTO';


export class AlarmHandleHistory {
    private 'work_order_id'?: string;
    private 'create_name'?: string;
    private 'create_alias'?: string;
    private 'task_type'?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    public duration?: number;
    public status?: string;
    private 'associated_task_id'?: string;
    private 'associated_task_name'?: string;
    private 'sub_task_info'?: SubTaskInfoDTO;
    public constructor() { 
    }
    public withWorkOrderId(workOrderId: string): AlarmHandleHistory {
        this['work_order_id'] = workOrderId;
        return this;
    }
    public set workOrderId(workOrderId: string  | undefined) {
        this['work_order_id'] = workOrderId;
    }
    public get workOrderId(): string | undefined {
        return this['work_order_id'];
    }
    public withCreateName(createName: string): AlarmHandleHistory {
        this['create_name'] = createName;
        return this;
    }
    public set createName(createName: string  | undefined) {
        this['create_name'] = createName;
    }
    public get createName(): string | undefined {
        return this['create_name'];
    }
    public withCreateAlias(createAlias: string): AlarmHandleHistory {
        this['create_alias'] = createAlias;
        return this;
    }
    public set createAlias(createAlias: string  | undefined) {
        this['create_alias'] = createAlias;
    }
    public get createAlias(): string | undefined {
        return this['create_alias'];
    }
    public withTaskType(taskType: string): AlarmHandleHistory {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): string | undefined {
        return this['task_type'];
    }
    public withStartTime(startTime: number): AlarmHandleHistory {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): AlarmHandleHistory {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withDuration(duration: number): AlarmHandleHistory {
        this['duration'] = duration;
        return this;
    }
    public withStatus(status: string): AlarmHandleHistory {
        this['status'] = status;
        return this;
    }
    public withAssociatedTaskId(associatedTaskId: string): AlarmHandleHistory {
        this['associated_task_id'] = associatedTaskId;
        return this;
    }
    public set associatedTaskId(associatedTaskId: string  | undefined) {
        this['associated_task_id'] = associatedTaskId;
    }
    public get associatedTaskId(): string | undefined {
        return this['associated_task_id'];
    }
    public withAssociatedTaskName(associatedTaskName: string): AlarmHandleHistory {
        this['associated_task_name'] = associatedTaskName;
        return this;
    }
    public set associatedTaskName(associatedTaskName: string  | undefined) {
        this['associated_task_name'] = associatedTaskName;
    }
    public get associatedTaskName(): string | undefined {
        return this['associated_task_name'];
    }
    public withSubTaskInfo(subTaskInfo: SubTaskInfoDTO): AlarmHandleHistory {
        this['sub_task_info'] = subTaskInfo;
        return this;
    }
    public set subTaskInfo(subTaskInfo: SubTaskInfoDTO  | undefined) {
        this['sub_task_info'] = subTaskInfo;
    }
    public get subTaskInfo(): SubTaskInfoDTO | undefined {
        return this['sub_task_info'];
    }
}