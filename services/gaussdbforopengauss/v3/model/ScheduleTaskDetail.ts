

export class ScheduleTaskDetail {
    private 'task_id'?: string;
    private 'task_name'?: string;
    public status?: string;
    private 'create_time'?: string;
    private 'start_time'?: string;
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'task_content'?: object;
    public constructor() { 
    }
    public withTaskId(taskId: string): ScheduleTaskDetail {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withTaskName(taskName: string): ScheduleTaskDetail {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withStatus(status: string): ScheduleTaskDetail {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: string): ScheduleTaskDetail {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withStartTime(startTime: string): ScheduleTaskDetail {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withInstanceId(instanceId: string): ScheduleTaskDetail {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): ScheduleTaskDetail {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withTaskContent(taskContent: object): ScheduleTaskDetail {
        this['task_content'] = taskContent;
        return this;
    }
    public set taskContent(taskContent: object  | undefined) {
        this['task_content'] = taskContent;
    }
    public get taskContent(): object | undefined {
        return this['task_content'];
    }
}