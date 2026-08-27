

export class ListUpgradeTasksRequest {
    private 'task_id'?: string;
    private 'task_name'?: string;
    private 'task_type'?: number;
    private 'scheduled_type'?: ListUpgradeTasksRequestScheduledTypeEnum | string;
    private 'is_enable'?: number;
    private 'last_execute_status'?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withTaskId(taskId: string): ListUpgradeTasksRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withTaskName(taskName: string): ListUpgradeTasksRequest {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withTaskType(taskType: number): ListUpgradeTasksRequest {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: number  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): number | undefined {
        return this['task_type'];
    }
    public withScheduledType(scheduledType: ListUpgradeTasksRequestScheduledTypeEnum | string): ListUpgradeTasksRequest {
        this['scheduled_type'] = scheduledType;
        return this;
    }
    public set scheduledType(scheduledType: ListUpgradeTasksRequestScheduledTypeEnum | string  | undefined) {
        this['scheduled_type'] = scheduledType;
    }
    public get scheduledType(): ListUpgradeTasksRequestScheduledTypeEnum | string | undefined {
        return this['scheduled_type'];
    }
    public withIsEnable(isEnable: number): ListUpgradeTasksRequest {
        this['is_enable'] = isEnable;
        return this;
    }
    public set isEnable(isEnable: number  | undefined) {
        this['is_enable'] = isEnable;
    }
    public get isEnable(): number | undefined {
        return this['is_enable'];
    }
    public withLastExecuteStatus(lastExecuteStatus: string): ListUpgradeTasksRequest {
        this['last_execute_status'] = lastExecuteStatus;
        return this;
    }
    public set lastExecuteStatus(lastExecuteStatus: string  | undefined) {
        this['last_execute_status'] = lastExecuteStatus;
    }
    public get lastExecuteStatus(): string | undefined {
        return this['last_execute_status'];
    }
    public withOffset(offset: number): ListUpgradeTasksRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListUpgradeTasksRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListUpgradeTasksRequestScheduledTypeEnum {
    FIXED_TIME = 'FIXED_TIME',
    DAY = 'DAY',
    WEEK = 'WEEK',
    MONTH = 'MONTH'
}
