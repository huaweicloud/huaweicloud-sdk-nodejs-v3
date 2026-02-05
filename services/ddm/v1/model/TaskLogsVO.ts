

export class TaskLogsVO {
    private 'task_id'?: string;
    private 'ddm_instance_id'?: string;
    public level?: string;
    private 'created_time'?: number;
    public message?: string;
    public constructor() { 
    }
    public withTaskId(taskId: string): TaskLogsVO {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withDdmInstanceId(ddmInstanceId: string): TaskLogsVO {
        this['ddm_instance_id'] = ddmInstanceId;
        return this;
    }
    public set ddmInstanceId(ddmInstanceId: string  | undefined) {
        this['ddm_instance_id'] = ddmInstanceId;
    }
    public get ddmInstanceId(): string | undefined {
        return this['ddm_instance_id'];
    }
    public withLevel(level: string): TaskLogsVO {
        this['level'] = level;
        return this;
    }
    public withCreatedTime(createdTime: number): TaskLogsVO {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: number  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): number | undefined {
        return this['created_time'];
    }
    public withMessage(message: string): TaskLogsVO {
        this['message'] = message;
        return this;
    }
}